import { WPPost } from "@/app/blog/typagem/typagem";

type Props = {
    post: WPPost
}

export function Conclusao({ post }: Props) {
    // Renderiza apenas se existir a primeira pergunta
    if (!post.meta?.pergunta1 || !post.meta?.resposta1) return null;

    return (
        <div className="my-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Principais Conclusões (FAQ)</h2>

            <div className="space-y-4">
                <details className="group border border-gray-200 rounded-lg bg-white [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-900">
                        <span>Principais Conclusões</span>
                        <span className="transition duration-300 group-open:-rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </summary>
                    <div className="p-4 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                        <p>{post.meta.conclusao}</p>
                    </div>
                </details>
            </div>
        </div>
    );
}