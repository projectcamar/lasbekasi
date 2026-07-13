import type { VercelRequest, VercelResponse } from '@vercel/node';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || '';
const BLUESMINDS_API_KEY = process.env.BLUESMINDS_API_KEY || '';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

interface GenerateArticleRequest {
    prompt: string;
    category?: string;
    model?: string; // Model ID from dropdown
    language?: string; // Requested language
}

interface ArticleContent {
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    introduction: string;
    keyPoints?: string[];
    language?: string; // AI confirmed language
    imageSearchQuery: string; // Search query for Unsplash
    image?: string; // Final Unsplash image URL
    sections: Array<{
        heading: string;
        content: string;
        imageSearchQuery?: string; // Only for Section 1
        image?: string; // Only for Section 1
        linkedProductId?: number; // Product ID (1-17) to mention
    }>;
    conclusion: string;
}

const SYSTEM_PROMPT = `You are an expert content writer for Mandiri Steel (also known as Bengkel Las Mandiri), a premium custom steel fabrication and professional welding workshop based in Setu, Bekasi, Indonesia.
 
Your task is to generate high-quality, SEO-optimized blog articles about custom steel works, minimalist home designs, durable canopy selection, gate security, window safety trellises, railing aesthetics, mezzanine structures, and local steel fabrication services in Bekasi and Jabodetabek.

IMPORTANT: You MUST respond with ONLY a valid JSON object, no additional text before or after. The JSON must follow this exact structure:

{
  "title": "Article title (max 60 characters, SEO-friendly)",
  "slug": "url-friendly-slug-lowercase-with-hyphens",
  "excerpt": "Brief summary (max 160 characters for meta description)",
  "category": "One of: Canopy Guide, Gate Designs, Home Security, Stair and Railing, Steel Construction, Local Area Guide, Quality Control, Tips and Trick",
  "imageSearchQuery": "A relevant English keyword for Unsplash image search (main cover)",
  "introduction": "Engaging opening paragraph (2-3 sentences)",
  "keyPoints": [
    "Key takeaway 1",
    "Key takeaway 2",
    "Key takeaway 3 (max 5 points)"
  ],
  "language": "Language code (id, en, ar, zh, ja, es, fr, ko)",
  "sections": [
    {
      "heading": "Section 1 heading",
      "content": "Section 1 content",
      "imageSearchQuery": "Specific English search query ONLY for Section 1"
    },
    {
      "heading": "Section 2 heading",
      "content": "Section 2 content"
    },
    {
      "heading": "Section 3 heading",
      "content": "Section 3 content",
      "productId": 1
    },
    {
      "heading": "Section 4 heading",
      "content": "Section 4 content",
      "productId": 3
    }
  ],
  "conclusion": "Compelling closing paragraph"
}

PRODUCT CATALOG (for 'productId'):
Use these IDs to mention products in sections (especially sections 3, 4, etc. for soft selling):
1: Kanopi Minimalis Alderon (Kanopi - Best Seller)
2: Kanopi Kaca Tempered (Kanopi - Premium)
3: Pagar Minimalis Modern (Pagar - Layanan Utama)
4: Pagar Besi Tempa Klasik (Pagar - Premium Klasik)
5: Teralis Jendela Minimalis (Teralis - Keamanan Rumah)
6: Railing Tangga Minimalis (Railing - Interior/Exterior)
7: Konstruksi Baja WF (Konstruksi - Industri/Gudang)
8: Pintu Pagar Stainless Steel (Pagar - Premium Stainless)

IMAGE LIMITATION:
- ONLY generate 'imageSearchQuery' for the MAIN cover and the FIRST section.
- For the SECOND section, do NOT generate 'imageSearchQuery' or 'productId' (keep it as text only).
- For all other sections (Section 3, 4, etc.), do NOT generate 'imageSearchQuery'. Instead, provide a 'productId' that matches the section's topic.
- If a section discusses about canopies, pick a canopy product (1 or 2). If it discusses gates, pick a gate product (3, 4, or 8).

LANGUAGE SUPPORT (CRITICAL):
Mandiri Steel serves customers in multiple languages across Bekasi, Jakarta, and global residential/commercial areas.
Supported Languages:
- id: Indonesian (Bahasa Indonesia)
- en: English
- ar: Arabic
- zh: Chinese
- ja: Japanese
- es: Spanish
- fr: French
- ko: Korean

INSTRUCTION: Write the ENTIRE article in the specific language requested by the user. If no language is specified, use Indonesian (id).
If the user provides a 'language' parameter, YOU MUST USE THAT LANGUAGE regardless of the prompt's language.
Example: If prompt is in Indonesian but language="en", write the article in ENGLISH.
Ensure the "language" field in JSON response matches the code (e.g., "en", "id").

IMAGE SUPPORT:
Choose a very specific English search query for the "imageSearchQuery" field. 
Avoid generic words like "furniture". Use specific terms like "minimalist steel gate", "modern glass canopy patio", "iron window trellis", "black steel railing balcony", "welding workshop".

CONTENT GUIDELINES:
- Use professional yet friendly tone
- Include specific details about Mandiri Steel: 25+ years of experience, heavy-duty SNI materials, free on-site survey and measurement, structural warranty, clean welds, and Setu Bekasi base.
- Mention target customers: homeowners, architects, residential developers, commercial space owners, warehouse developers in Bekasi and Jabodetabek.
- Include practical tips and actionable advice
- Use HTML tags for formatting: <strong>, <em>, <br>
- Create 3-5 sections minimum (you can create more if needed)
- Each section should be substantial (150-300 words)
- Focus on material thickness, weather resistance in tropical climate, home safety, aesthetics, and professional installation.
- Include relevant keywords naturally (e.g., "bengkel las bekasi", "kanopi alderon bekasi", "pagar minimalis modern").
- CRITICAL LOCAL SEO & GEOTARGETING (BEKASI & CIKARANG GEOGRAPHIC DATABASE):
  To rank #1 on Google in Bekasi, Cikarang, and Jabodetabek, you MUST act as if you have a deep local geographic database. Weave in these names naturally and contextually (usually 3-6 specific names per article, depending on the topic):
  * Workshop Base (HQ): Lubangbuaya, Kec. Setu, Kab. Bekasi (Jalan Raya Setu-Cibitung). We provide FREE survey & measurements here, with free delivery to all neighboring subdistricts.
  * Key Subdistricts (Kecamatan) & Areas: Setu, Cibitung, Tambun Selatan, Tambun Utara, Cikarang Barat, Cikarang Utara, Cikarang Selatan, Cikarang Timur, Cikarang Pusat, Babelan, Tarumajaya, Karangbahagia, Serang Baru, Cibarusah, Mustikajaya, Jatiasih, Jatisampurna, Pondok Gede, Pondok Melati, Rawalumbu, Medan Satria, Bantargebang (Narogong), Bekasi Timur, Bekasi Barat, Bekasi Utara, Bekasi Selatan.
  * High-End Residential Estates (Perumahan & Clusters):
    - Grand Wisata Tambun (Celebration, Water Spring, Lemonade, Cherrys, Romano, Monte Cerino, O2 Park, Zora, La Monte)
    - Summarecon Bekasi (Burgundy Residence, Maple, Olive, Magenta, Jasmine, Orchid, Acacia, The Spring Lake)
    - Kemang Pratama (Kemang Pratama 1, 2, 3, 5, Cluster Lavender, Duta, Kemang Pratama Regensi)
    - Grand Galaxy City (Cluster Tropical, Central Park, Rose Garden, Gardenia, Jasmine)
    - Kota Harapan Indah (Cluster Aralia, Ifolia, Lora, Green Ara, Harapan Indah 2)
    - Metland Tambun, Metland Cibitung, Metland Transyogi, Metland Menteng.
    - Lippo Cikarang (Meadow Green, Elysium Residence, Florencia, Magnolia, Vanya, Acacia, Ambrosia)
    - Kota Deltamas (Nagoya, Woodchester, Naraya, Pasadena, Elverde, Savoy)
    - Mutiara Gading Timur (MGT), Bekasi Timur Regensi (BTR), Dukuh Zamrud, Prima Harapan Regensi, Villa Mutiara Gading, Grand Cikarang City (GCC), Villa Mutiara Cikarang (VMC), Graha Asri Cikarang, Jababeka Residence, Nirwana Wanajaya, Grand Residence City Setu.
  * Major Transit Hubs, Stations & Highways: Stasiun Bekasi (Kranji), Stasiun Bekasi Timur, Stasiun Tambun, Stasiun Cibitung, Stasiun Metland Telagamurni, Stasiun Cikarang. Gerbang Tol Bekasi Barat, Gerbang Tol Bekasi Timur, Gerbang Tol Grand Wisata (Tambun), Gerbang Tol Cibitung, Gerbang Tol Cikarang Barat, Gerbang Tol Cikarang Utama, Gerbang Tol Karawang Barat.
  * Famous Main Roads & Corridors: Jalan Ahmad Yani (Bekasi Selatan), Jalan KH. Noer Ali (Kalimalang), Jalan Ir. H. Juanda, Jalan Mayor Madmuin Hasibuan, Jalan Chairil Anwar, Jalan Jendral Sudirman, Jalan Raya Siliwangi (Bantargebang - Narogong), Jalan Raya Setu-Cibitung, Jalan Raya Kalimalang, Jalan Inspeksi Kalimalang, Jalan Raya Cikarang-Cibarusah, Jalan Kebon Kopi, Jalan Raya Tambun.
  * Major Industrial Zones (for Mezzanine Floor & Structural Steel orders): MM2100 Industrial Town Cibitung, EJIP (East Jakarta Industrial Park) Cikarang, Hyundai Industrial Park, Jababeka Industrial Estate (I, II, V), Delta Silicon Industrial Park, Greenland International Industrial Center (GIIC) Deltamas, Gobel Industrial Estate Cibitung.
  * Famous Local Landmarks: Stadion Patriot Candrabhaga, Summarecon Mall Bekasi (SMB), Metropolitan Mall (MM), Grand Metropolitan Mall, Mega Bekasi Hypermall, BTC (Bekasi Trade Center), Chadstone Cikarang, Mall Lippo Cikarang.
  * Contextual Integration: Weave these local landmarks, streets, and residential areas naturally into the sections. Example: "Kami siap melayani survei lokasi gratis dan pemasangan kanopi minimalis di perumahan Grand Wisata Tambun, Summarecon Bekasi, Lippo Cikarang, hingga pengerjaan mezzanine baja di kawasan industri MM2100 Cibitung."

SECTION VARIETY (adapt to language):
You can create as many sections as needed to cover the topic comprehensively. Common section types:
- "Why [Topic] is Important?" / "Mengapa [Topic] Penting?" / "なぜ[Topic]が重要か？"
- "Practical Guide & Best Practices" / "Panduan Praktis & Best Practices"
- "Comparison & Data" / "Perbandingan & Data"
- "Mandiri Steel Solutions" / "Solusi Mandiri Steel"
- "FAQ" / "よくある質問"
- "Next Steps" / "Langkah Selanjutnya"

Remember: Output ONLY the JSON object, nothing else.`;

/**
 * Fetch a relevant image from Unsplash
 */
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
        const { prompt, category, model = 'llama-3.3-70b-versatile', language, groqApiKey, openRouterApiKey, bluesmindsApiKey, unsplashAccessKey }: GenerateArticleRequest & { groqApiKey?: string; openRouterApiKey?: string; bluesmindsApiKey?: string; unsplashAccessKey?: string } = req.body;

        if (!prompt || prompt.trim().length === 0) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        // --- Fallback & Retry Logic ---
        let aiResponse: string | null = null;
        let lastError: any = null;

        for (let attempt = 1; attempt <= 4; attempt++) {
            try {
                let currentModel = model;
                let currentApiUrl = OPENROUTER_API_URL;
                let currentApiKey = OPENROUTER_API_KEY;
                let currentProvider = 'openrouter';

                if (attempt === 1) {
                    currentProvider = 'bluesminds';
                    currentApiKey = bluesmindsApiKey || BLUESMINDS_API_KEY;
                    currentModel = 'claude-sonnet-4-6';
                    currentApiUrl = 'https://api.bluesminds.com/v1/chat/completions';
                } else if (attempt === 2) {
                    currentProvider = 'bluesminds';
                    currentApiKey = bluesmindsApiKey || BLUESMINDS_API_KEY;
                    currentModel = 'moonshotai/kimi-k2.6';
                    currentApiUrl = 'https://api.bluesminds.com/v1/chat/completions';
                } else if (attempt === 3) {
                    currentProvider = 'bluesminds';
                    currentApiKey = bluesmindsApiKey || BLUESMINDS_API_KEY;
                    currentModel = 'qwen3.6-27b';
                    currentApiUrl = 'https://api.bluesminds.com/v1/chat/completions';
                } else if (attempt === 4) {
                    // Fallback to the original model (e.g. Groq or OpenRouter)
                    const isOpenRouter = model.includes('/');
                    currentApiUrl = isOpenRouter ? OPENROUTER_API_URL : GROQ_API_URL;
                    currentApiKey = isOpenRouter 
                        ? (openRouterApiKey || OPENROUTER_API_KEY) 
                        : (groqApiKey || GROQ_API_KEY);
                    currentApiKey = currentApiKey?.trim() || '';
                    currentModel = model;
                    currentProvider = isOpenRouter ? 'openrouter' : 'groq';

                    if (!currentApiKey || currentApiKey === 'gsk_dev_placeholder' || currentApiKey === 'dev_placeholder') {
                        throw new Error(`API key not configured for ${currentProvider}.`);
                    }
                }

                // Prepare headers
                const headers: Record<string, string> = {
                    'Authorization': `Bearer ${currentApiKey}`,
                    'Content-Type': 'application/json',
                };

                // Add OpenRouter-specific headers if needed
                if (currentProvider === 'openrouter') {
                    headers['HTTP-Referer'] = 'https://lasbekasi.com';
                    headers['X-Title'] = 'Mandiri Steel Blog Generator';
                }

                console.log(`[Attempt ${attempt}] Trying model: ${currentModel} via ${currentProvider}`);

                // Call AI API
                const apiResponse = await fetch(currentApiUrl, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify({
                        model: currentModel,
                        messages: [
                            { role: 'system', content: SYSTEM_PROMPT },
                            { role: 'user', content: `Generate a blog article about: ${prompt}${category ? `\nPreferred category: ${category}` : ''}${language ? `\nTARGET LANGUAGE: ${language} (MUST USE THIS LANGUAGE)` : ''}` }
                        ],
                        temperature: 0.7,
                        max_tokens: 4000,
                        ...(currentProvider !== 'openrouter' && currentProvider !== 'bluesminds' ? { response_format: { type: 'json_object' } } : {})
                    }),
                });

                if (!apiResponse.ok) {
                    const errorText = await apiResponse.text();
                    throw new Error(`API error ${apiResponse.status}: ${errorText}`);
                }

                const data = await apiResponse.json();
                aiResponse = data.choices?.[0]?.message?.content;

                if (aiResponse) {
                    console.log(`[Attempt ${attempt}] Success!`);
                    break; // Exit loop if successful
                } else {
                    throw new Error('No content returned from AI');
                }
            } catch (err) {
                console.error(`[Attempt ${attempt}] Failed:`, (err as Error).message);
                lastError = err;
                // If it's the last attempt, don't throw yet, it will be handled below
            }
        }

        if (!aiResponse) {
            return res.status(500).json({ 
                error: 'All AI fallback attempts failed', 
                details: lastError instanceof Error ? lastError.message : String(lastError) 
            });
        }

        // Parse AI response
        let articleContent: ArticleContent;
        try {
            articleContent = JSON.parse(aiResponse);
        } catch (parseError) {
            console.error('Failed to parse AI response:', aiResponse);
            return res.status(500).json({
                error: 'Invalid AI response format',
                rawResponse: aiResponse
            });
        }

        // Validate required fields
        if (!articleContent.title || !articleContent.slug || !articleContent.introduction) {
            return res.status(500).json({
                error: 'AI response missing required fields',
                received: articleContent
            });
        }

        // Fetch image from Unsplash if search query is provided for cover
        if (articleContent.imageSearchQuery) {
            const imageUrl = await fetchUnsplashImage(articleContent.imageSearchQuery, unsplashAccessKey);
            if (imageUrl) {
                articleContent.image = imageUrl;
            }
        }

        // Fetch images for each section if search query is provided
        if (articleContent.sections && articleContent.sections.length > 0) {
            // ONLY Section 1 gets an image search as per requirement
            const section1 = articleContent.sections[0];
            if (section1 && section1.imageSearchQuery) {
                const sectionImageUrl = await fetchUnsplashImage(section1.imageSearchQuery, unsplashAccessKey);
                if (sectionImageUrl) {
                    section1.image = sectionImageUrl;
                    (section1 as any).imageAlt = section1.imageSearchQuery;
                }
            }

            // Ensure other sections don't have images (Section 2 is empty, others use productId)
            for (let i = 1; i < articleContent.sections.length; i++) {
                delete articleContent.sections[i].imageSearchQuery;
                delete articleContent.sections[i].image;
            }
        }

        return res.status(200).json({
            success: true,
            article: articleContent
        });

    } catch (error) {
        console.error('Generate article error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
