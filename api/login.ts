import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { username, password } = req.body;

    // Trim whitespace to prevent common copy-paste issues
    const cleanUsername = (username || '').trim();
    const cleanPassword = (password || '').trim();

    // Map of valid users to their password environment variables or hardcoded values
    // We prioritize environment variables for security
    const VALID_USERS: Record<string, string | undefined> = {
        'rioanggara': 'rioanggara333',
        'brifki': process.env.BRIFKI_PASSWORD || 'bebirifki67',
        'rifki': process.env.BRIFKI_PASSWORD || 'bebirifki67' // Alias for brifki
    };

    let targetPassword = VALID_USERS[cleanUsername];

    // Allow additional fallbacks for rioanggara
    if (cleanUsername === 'rioanggara') {
        const allowedPasswords = [
            'rioanggara333',
            'rio08577354',
            (process.env.ADMIN_PASSWORD || '').trim()
        ].filter(Boolean);

        if (allowedPasswords.includes(cleanPassword)) {
            targetPassword = cleanPassword; // Mark as correct
        }
    }

    if (targetPassword && cleanPassword === targetPassword) {
        console.log(`[AUTH_SUCCESS] User ${cleanUsername} logged in successfully.`);
        return res.status(200).json({
            success: true,
            token: 'naturra_admin_session_' + Date.now(),
            user: { username: cleanUsername }
        });
    }

    console.warn(`[AUTH_FAILURE] Invalid login attempt for username: "${cleanUsername}"`);
    return res.status(401).json({ error: 'Invalid username or password. Please check your credentials.' });
}
