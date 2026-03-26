import { WPPost } from "../typagem/typagem";
import Image from "next/image";
import PostData from "./plugins/DataTempo/Dt";
import Equipe from "./plugins/equipe/equipe";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

async function getFeaturedImage(href: string): Promise<string | null> {
    const res = await fetch(href, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.source_url ?? null;
}

async function getPost(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `https://head.agenciaplanner.dev/wp-json/wp/v2/postes?slug=${slug}`,
        { cache: "no-store" }
    );

    const data: WPPost[] = await res.json();

    console.log("SLUG:", slug);
    console.log("DATA:", data);

    return data.length > 0 ? data[0] : null;
}









//conteudo 

export default async function Page({ params }: PageProps) {
    const { slug } = await params; // 🔥 CORREÇÃO

    const decodedSlug = decodeURIComponent(slug);

    const post = await getPost(decodedSlug);

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    let imageUrl = null;
    if (post._links?.["wp:featuredmedia"]?.[0]?.href) {
        imageUrl = await getFeaturedImage(post._links["wp:featuredmedia"][0].href);
    }

   

    //conteudo 

    return (
        <main >
            <div className="flex justify-center">
                <div className="max-w-[1400px] w-full">

                    <div className="max-w-[1400px] overflow-hidden rounded-xl my-10 mx-4 md:mx-0">
                        {imageUrl && (
                            <Image
                                src={imageUrl}
                                alt={post.title.rendered}
                                width={800}
                                height={200}
                                className="w-full h-[700px]"
                            />
                        )}
                    </div>


                    <p>teste</p>

                    <h1 className="text-[48px] pb-[13px] font-extrabold leading-[1.1]">{post.title.rendered}</h1>

                    <PostData post={post}/>
                    <Equipe post={post}/>

                

                </div>
            </div>
        </main >
    );
}