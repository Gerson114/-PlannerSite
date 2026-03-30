import { WPPost } from "../typagem/typagem";
import Image from "next/image";
import PostData from "./plugins/DataTempo/Dt";
import Equipe from "./plugins/equipe/equipe";
import { Conclusao } from "./plugins/conclusao/conclusao";
import Conteudo from "./plugins/conteudo/conteudo";
import type { Metadata } from "next";
import FAQ from "./plugins/faq/faq";
import DOMPurify from "isomorphic-dompurify";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};



const BASE_URL = "https://agenciaplanner.com";
const SITE_NAME = "Agência Planner";

async function getFeaturedImage(href: string): Promise<string | null> {
    try {
        const res = await fetch(href, { next: { revalidate: 3600 } });
        if (!res.ok) return null;
        const data = await res.json();
        return data?.source_url ?? null;
    } catch {
        return null;
    }
}

async function getPost(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `https://head.agenciaplanner.dev/wp-json/wp/v2/postes?slug=${slug}`,
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data: WPPost[] = await res.json();
    return data.length > 0 ? data[0] : null;
}

// ─── SEO: generateMetadata dinâmico ────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const post = await getPost(decodedSlug);

    if (!post) {
        return {
            title: "Post não encontrado",
            description: "Este post não existe ou foi removido.",
            robots: { index: false, follow: false },
        };
    }

    // Buscar imagem destacada para OG/Twitter
    let imageUrl: string | null = null;
    if (post._links?.["wp:featuredmedia"]?.[0]?.href) {
        imageUrl = await getFeaturedImage(post._links["wp:featuredmedia"][0].href);
    }

    // Strip HTML tags do título e excerpt
    const plainTitle = post.title.rendered.replace(/<[^>]+>/g, "");
    const description =
        post.meta?.introducion?.replace(/<[^>]+>/g, "").slice(0, 160) ??
        `${plainTitle} – ${SITE_NAME}`;
    const canonical = `${BASE_URL}/blog/${decodedSlug}`;
    const publishedAt = post.date_gmt ? new Date(post.date_gmt).toISOString() : undefined;
    const modifiedAt = post.modified_gmt ? new Date(post.modified_gmt).toISOString() : undefined;
    const author = post.meta?.nome_da_criacao_do_post ?? SITE_NAME;

    return {
        // ── Básico ──────────────────────────────────────────────────────────
        title: plainTitle,
        description,
        authors: [{ name: author }],

        // ── Canonical + robots ──────────────────────────────────────────────
        alternates: {
            canonical,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1,
            },
        },

        // ── Open Graph ──────────────────────────────────────────────────────
        openGraph: {
            title: plainTitle,
            description,
            url: canonical,
            siteName: SITE_NAME,
            locale: "pt_BR",
            type: "article",
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [author],
            ...(imageUrl && {
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: plainTitle,
                    },
                ],
            }),
        },

        // ── Twitter / X Card ────────────────────────────────────────────────
        twitter: {
            card: "summary_large_image",
            title: plainTitle,
            description,
            site: "@agenciaplanner",
            creator: "@agenciaplanner",
            ...(imageUrl && { images: [imageUrl] }),
        },
    };
}
// ────────────────────────────────────────────────────────────────────────────



export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const post = await getPost(decodedSlug);

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    let imageUrl: string | null = null;
    if (post._links?.["wp:featuredmedia"]?.[0]?.href) {
        imageUrl = await getFeaturedImage(post._links["wp:featuredmedia"][0].href);
    }

    return (
        <main>
            <div className="flex justify-center">
                <div className="max-w-[1400px] w-full">

                    <div className="max-w-[1400px] overflow-hidden rounded-xl my-10 mx-4 md:mx-0">
                        {imageUrl && (
                            <Image
                                src={imageUrl}
                                alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                                width={1200}
                                height={630}
                                priority
                                className="w-full h-[700px] object-cover"
                            />
                        )}
                    </div>

                    <h1 className="text-[48px] pb-[13px] font-extrabold leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.title.rendered) }}
                    />


                    <PostData post={post} />
                    <Equipe post={post} />
                    <Conclusao post={post} />
                    <Conteudo post={post} />
                    <FAQ post={post} />

                </div>
            </div>
        </main>
    );
}