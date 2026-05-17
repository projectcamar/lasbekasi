export interface BlogPost {
  id: number
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  date: string
  author?: string
  status?: 'draft' | 'synced'

  // Custom content (optional) - takes priority over AI-generated content
  customContent?: {
    introduction?: string // Rich HTML content
    keyPoints?: string[] // Key takeaways/bullets
    language?: 'id' | 'en' | 'ar' | 'zh' | 'ja' | 'es' | 'fr' | 'ko' // Explicit content language
    sections?: Array<{
      heading: string
      content: string // Rich HTML content
      image?: string
      imageAlt?: string
      imageSearchQuery?: string
      productId?: number
    }>
    conclusion?: string // Rich HTML content
  }
}

export const BLOG_POSTS: BlogPost[] = [];

export const getAllBlogPosts = () => BLOG_POSTS;

export const getPostBySlug = (slug: string) => BLOG_POSTS.find(p => p.slug === slug);

export const getPostsByPage = (page: number, limit: number = 6) => {
  const start = (page - 1) * limit;
  return BLOG_POSTS.slice(start, start + limit);
};

export const getTotalPages = (limit: number = 6) => {
  return Math.ceil(BLOG_POSTS.length / limit);
};
