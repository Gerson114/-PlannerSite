import { MetadataRoute } from 'next'
import { unstable_cache } from 'next/cache'

const BASE_URL = 'https://agenciaplanner.com'
const WP_API = 'https://head.agenciaplanner.dev/wp-json/wp/v2/postes'

interface WPPostBasic {
  slug: string
  modified_gmt: string
  date_gmt: string
}

// Cache dos slugs dos posts — válido por 1h, invalidável via tag 'wp-posts'
const getCachedPostSlugs = unstable_cache(
  async (): Promise<WPPostBasic[]> => {
    try {
      const posts: WPPostBasic[] = []
      let page = 1

      while (true) {
        const res = await fetch(
          `${WP_API}?per_page=100&page=${page}&_fields=slug,modified_gmt,date_gmt`,
          { cache: 'no-store' } // sem cache no fetch — o controle de cache é feito pelo unstable_cache
        )

        if (!res.ok) break

        const data: WPPostBasic[] = await res.json()
        if (data.length === 0) break

        posts.push(...data)

        const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? '1')
        if (page >= totalPages) break
        page++
      }

      return posts
    } catch {
      return []
    }
  },
  ['wp-posts-sitemap'],   // chave única do cache
  {
    revalidate: 3600,     // fallback de 1h - cache quebrado imediatamente pelo webhook do WordPress
    tags: ['wp-posts'],
  }
)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/pages/brandings`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pages/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pages/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pages/Quem-Somos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Posts do WordPress — servidos do cache, atualizados via webhook ou a cada 1h
  const posts = await getCachedPostSlugs()
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.modified_gmt
      ? new Date(post.modified_gmt)
      : new Date(post.date_gmt ?? Date.now()),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...postPages]
}
