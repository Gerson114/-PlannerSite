import { MetadataRoute } from 'next'

const BASE_URL = 'https://agenciaplanner.com'
const WP_API = 'https://head.agenciaplanner.dev/wp-json/wp/v2/postes'

interface WPPostBasic {
  slug: string
  modified_gmt: string
}

async function getAllPostSlugs(): Promise<WPPostBasic[]> {
  try {
    // Busca até 100 posts por página, percorre todas as páginas
    const posts: WPPostBasic[] = []
    let page = 1

    while (true) {
      const res = await fetch(
        `${WP_API}?per_page=100&page=${page}&_fields=slug,modified_gmt`,
        { next: { revalidate: 3600 } } // revalida a cada 1 hora
      )

      if (!res.ok) break

      const data: WPPostBasic[] = await res.json()
      if (data.length === 0) break

      posts.push(...data)

      // Verifica se há mais páginas
      const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? '1')
      if (page >= totalPages) break
      page++
    }

    return posts
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Páginas estáticas fixas
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

  // Posts do WordPress — gerados dinamicamente
  const posts = await getAllPostSlugs()
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.modified_gmt ? new Date(post.modified_gmt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...postPages]
}
