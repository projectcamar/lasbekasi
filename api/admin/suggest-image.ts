import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

async function fetchUnsplashImage(query: string, customKey?: string): Promise<string | null> {
    const activeKey = customKey || UNSPLASH_ACCESS_KEY;
    if (!activeKey || activeKey === 'dev_placeholder') return null;

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`, {
            headers: {
                'Authorization': `Client-ID ${activeKey}`
            }
        });

        if (!response.ok) return null;

        const data = await response.json();
        return data.results?.[0]?.urls?.regular || null;
    } catch (error) {
        console.error('Unsplash fetch error:', error);
        return null;
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { title, excerpt, model = 'llama-3.3-70b-versatile', context = 'main cover image', groqApiKey, openRouterApiKey, unsplashAccessKey } = req.body;

        if (!title) {
            return res.status(400).json({ error: 'Title/Heading is required' });
        }

        // Determine which API to use based on model
        const isOpenRouter = model.includes('/');
        const apiUrl = isOpenRouter ? OPENROUTER_API_URL : GROQ_API_URL;
        
        let apiKey = isOpenRouter 
            ? (openRouterApiKey || OPENROUTER_API_KEY) 
            : (groqApiKey || GROQ_API_KEY);

        apiKey = apiKey?.trim();

        if (!apiKey || apiKey === 'gsk_dev_placeholder' || apiKey === 'dev_placeholder') {
            return res.status(500).json({
                error: `API key not configured for ${isOpenRouter ? 'OpenRouter' : 'Groq'}. Please configure it in your environment variables or settings.`
            });
        }

        // Step 1: Generate a high-quality Unsplash search query using AI
        const aiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model,
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert at choosing the perfect image search query for blog posts. Respond with ONLY the search query in English. Tends toward specific, high-quality architectural or product photography terms. No quotes, no preamble.'
                    },
                    {
                        role: 'user',
                        content: `Context: ${context}\nArticle/Section Heading: ${title}\nContent Snippet: ${excerpt || ''}\n\nProvide a specific English search query for Unsplash (e.g. "minimalist steel gate", "modern glass canopy patio", "iron window trellis", "black steel railing balcony", "welding workshop"). Ensure the query is relevant to the specific context provided.`
                    }
                ],
                temperature: 0.5,
                max_tokens: 50
            }),
        });

        if (!aiResponse.ok) {
            throw new Error('AI query generation failed');
        }

        const aiData = await aiResponse.json();
        const searchQuery = aiData.choices[0]?.message?.content?.trim().replace(/^"|"$/g, '') || title;

        // Step 2: Fetch the image from Unsplash
        const imageUrl = await fetchUnsplashImage(searchQuery, unsplashAccessKey);

        return res.status(200).json({
            success: true,
            image: imageUrl,
            searchQuery: searchQuery
        });

    } catch (error) {
        console.error('Suggest image error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
