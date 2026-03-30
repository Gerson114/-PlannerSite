import { WPPost } from "../../typagem/typagem";
import Image from "next/image";
import Link from "next/link";
import { unstable_cache } from "next/cache";

// Cache da lista de posts — 1h, invalidado quando o webhook é chamado
const getPosts = unstable_cache(
    async (): Promise<WPPost[]> => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WP_API}?per_page=12`,
            { cache: "no-store" }
        );
        if (!res.ok) return [];
        return res.json();
    },
    ["wp-posts-listing"],
    { revalidate: 3600, tags: ["wp-posts"] }  // fallback de 1h - cache quebrado imediatamente pelo webhook
);

// Cache de imagem por URL — 24h (imagens mudam raramente)
const getFeaturedImage = unstable_cache(
    async (href: string): Promise<string | null> => {
        try {
            const res = await fetch(href, { cache: "no-store" });
            if (!res.ok) return null;
            const data = await res.json();
            return data?.source_url ?? null;
        } catch {
            return null;
        }
    },
    ["wp-featured-image"],
    { revalidate: 86400, tags: ["wp-posts"] } // 24h
);

export default async function Posts() {
    const posts = await getPosts();

    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-[1400px] w-full px-4 md:px-0">
                    <h2 className="text-[48px] font-extrabold mt-[70px] mb-[40px]">
                        Ultimos Posts
                    </h2>

                    {posts.length === 0 ? (
                        <p className="text-gray-500 text-lg">Nenhum post encontrado.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-[80px]">
                            {await Promise.all(
                                posts.map(async (post) => {
                                    const imageHref = post._links?.["wp:featuredmedia"]?.[0]?.href;
                                    const imageUrl = imageHref ? await getFeaturedImage(imageHref) : null;

                                    const plainTitle = post.title.rendered.replace(/<[^>]+>/g, "");
                                    const excerpt = post.meta?.introducion
                                        ? post.meta.introducion.replace(/<[^>]+>/g, "").slice(0, 120) + "..."
                                        : "";
                                    const author = post.meta?.nome_da_criacao_do_post ?? "Agencia Planner";
                                    const readTime = post.meta?.minutos_de_leitura;
                                    const date = post.date
                                        ? new Date(post.date).toLocaleDateString("pt-BR", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })
                                        : null;

                                    return (
                                        <Link
                                            key={post.id}
                                            href={`/blog/${post.slug}`}
                                            className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                        >
                                            <div className="relative w-full h-[220px] bg-gray-100 overflow-hidden">
                                                {imageUrl ? (
                                                    <Image
                                                        src={imageUrl}
                                                        alt={plainTitle}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                                                        <span className="text-gray-400 text-sm">Sem imagem</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-col flex-1 p-6 gap-3">
                                                <h3 className="text-[20px] font-bold leading-snug text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                                    {plainTitle}
                                                </h3>

                                                {excerpt && (
                                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                                        {excerpt}
                                                    </p>
                                                )}

                                                <div className="mt-auto flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                                                    <span className="font-medium text-gray-600">{author}</span>
                                                    <div className="flex items-center gap-3">
                                                        {readTime && <span>{readTime} min de leitura</span>}
                                                        {date && <span>{date}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
