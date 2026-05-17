import type { VercelRequest, VercelResponse } from '@vercel/node';

function escapeString(str: string): string {
    return str
        .replace(/\\/g, '\\\\') // escape backslashes
        .replace(/'/g, "\\'")   // escape single quotes
        .replace(/\n/g, '\\n')  // escape newlines
        .replace(/\r/g, '\\r');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, projectType, rating, comment } = req.body;

    if (!name || !projectType || !rating || !comment) {
        return res.status(400).json({
            error: 'Invalid request',
            details: 'name, projectType, rating, and comment are required'
        });
    }

    const ratingNum = Number(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
        return res.status(400).json({
            error: 'Invalid request',
            details: 'rating must be a number between 1 and 5'
        });
    }

    const date = new Date().toISOString().split('T')[0];
    const newId = `visitor-${Date.now()}`;
    const responseText = `Terima kasih banyak ${name} atas ulasan bintang ${ratingNum}-nya! Bapak Maman Toha dan segenap tim sangat senang bisa memasang ${projectType} Anda secara rapi. Kami tunggu pesanan berikutnya!`;

    const newTestimonialObjectString = `    {
        id: '${newId}',
        name: '${escapeString(name)}',
        projectType: '${escapeString(projectType)}',
        rating: ${ratingNum},
        comment: '${escapeString(comment)}',
        date: '${date}',
        response: '${escapeString(responseText)}',
        isVisitorComment: true
    },\n`;

    const isDev = process.env.NODE_ENV === 'development' || !process.env.VERCEL;

    if (isDev) {
        try {
            const fs = await import('fs');
            const path = await import('path');
            
            const filePath = path.join(process.cwd(), 'src/data/testimonials.ts');
            if (fs.existsSync(filePath)) {
                const currentContent = fs.readFileSync(filePath, 'utf8');
                const match = currentContent.match(/(export const INITIAL_TESTIMONIALS: Testimonial\[\] = \[\s*)/);
                
                if (match) {
                    const newContent = currentContent.replace(
                        /(export const INITIAL_TESTIMONIALS: Testimonial\[\] = \[\s*)/,
                        `$1${newTestimonialObjectString}`
                    );
                    
                    fs.writeFileSync(filePath, newContent, 'utf8');
                    return res.status(200).json({
                        success: true,
                        message: 'Local src/data/testimonials.ts updated successfully!',
                        deployed: true
                    });
                } else {
                    throw new Error('Could not find INITIAL_TESTIMONIALS array in testimonials.ts');
                }
            } else {
                throw new Error('testimonials.ts not found');
            }
        } catch (localError: any) {
            console.error('[LOCAL_WRITE_ERROR]', localError);
            return res.status(500).json({
                error: 'Failed to write locally',
                details: localError.message
            });
        }
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_REPO = process.env.GITHUB_REPO || 'projectcamar/lasbekasi';
    const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

    if (!GITHUB_TOKEN) {
        return res.status(500).json({
            error: 'GitHub token not configured',
            details: 'Please set GITHUB_TOKEN in Vercel environment variables'
        });
    }

    try {
        const [owner, repo] = GITHUB_REPO.split('/');
        const filePath = 'src/data/testimonials.ts';

        // Step 1: Get current testimonials file content from GitHub
        const getFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${GITHUB_BRANCH}`;
        const getFileResponse = await fetch(getFileUrl, {
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'LasBekasi-Testimonial-Bot'
            }
        });

        if (!getFileResponse.ok) {
            throw new Error(`Failed to fetch file from GitHub: ${getFileResponse.statusText}`);
        }

        const fileData = await getFileResponse.json();
        const currentContent = Buffer.from(fileData.content, 'base64').toString('utf8');
        const sha = fileData.sha;

        // Step 2: Inject the new testimonial at the top of INITIAL_TESTIMONIALS
        const match = currentContent.match(/(export const INITIAL_TESTIMONIALS: Testimonial\[\] = \[\s*)/);
        if (!match) {
            throw new Error('Could not find INITIAL_TESTIMONIALS array in GitHub file content');
        }

        const newContent = currentContent.replace(
            /(export const INITIAL_TESTIMONIALS: Testimonial\[\] = \[\s*)/,
            `$1${newTestimonialObjectString}`
        );

        // Step 3: Commit and push the updated file back to GitHub
        const updateFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
        const commitMessage = `New testimonial from ${name} via public form`;
        
        const updateFileResponse = await fetch(updateFileUrl, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
                'User-Agent': 'LasBekasi-Testimonial-Bot'
            },
            body: JSON.stringify({
                message: commitMessage,
                content: Buffer.from(newContent).toString('base64'),
                sha: sha,
                branch: GITHUB_BRANCH
            })
        });

        if (!updateFileResponse.ok) {
            const errorData = await updateFileResponse.json();
            throw new Error(`Failed to update file on GitHub: ${errorData.message || updateFileResponse.statusText}`);
        }

        const updateResult = await updateFileResponse.json();

        return res.status(200).json({
            success: true,
            message: 'Testimonial added and pushed successfully. Vercel will redeploy.',
            deployed: true,
            commitUrl: updateResult.commit?.html_url,
            commitSha: updateResult.commit?.sha
        });

    } catch (error: any) {
        console.error('[SUBMIT_TESTIMONIAL_ERROR]', error);
        return res.status(500).json({
            error: 'Failed to auto-push testimonial',
            details: error.message
        });
    }
}
