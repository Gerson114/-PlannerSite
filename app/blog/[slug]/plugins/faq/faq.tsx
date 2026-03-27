import { WPPost } from "@/app/blog/typagem/typagem";
import { ChevronRight } from "lucide-react";

type Props = {
    post: WPPost
}

export default function FAQ({ post }: Props) {
    const tituloGigante = "FAQ";
    const subtitulo = "Perguntas Frequentes";

    return (
        <div className="flex justify-center w-full overflow-hidden">
            <div className="max-w-[1400px] w-full px-6 md:px-10 py-10 md:py-20">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20">

                    {/* LADO ESQUERDO */}
                    <div className="lg:sticky lg:top-10 w-full lg:w-auto text-center lg:text-left">
                        <h1 className="hidden lg:block text-[150px] xl:text-[300px] font-bold leading-none select-none opacity-10 lg:opacity-100">
                            {tituloGigante}
                        </h1>

                        <p className="text-[32px] md:text-[45px] lg:text-[60px] lg:mt-[-50px] leading-[1.1] font-medium text-black">
                            {subtitulo}
                        </p>
                    </div>

                    {/* LADO DIREITO */}
                    <div className="flex-1 w-full space-y-4 md:space-y-6 pb-10 md:pb-20">

                        {/* ITEM 1 */}
                        <div className="bg-[#F3F7FA] rounded-[20px] p-5 md:p-6 group cursor-pointer transition-all duration-300 hover:shadow-md">
                            <div className="flex justify-between items-center gap-4">
                                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 leading-tight">
                                    {post.meta.p1r1}

                                </h3>

                                <div className="bg-black w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-[12px] shrink-0 transition-transform duration-300 group-hover:rotate-90">
                                    <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </div>

                            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[300px] md:group-hover:max-h-40">
                                <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-4 md:pt-6">
                                    {post.meta.p1r2}
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="bg-[#F3F7FA] rounded-[20px] p-5 md:p-6 group cursor-pointer transition-all duration-300 hover:shadow-md">
                            <div className="flex justify-between items-center gap-4">
                                <h3 className="text-[18px] md:text-[22px] font-bold text-gray-800 leading-tight">
                                    {post.meta._p2}
                                </h3>

                                <div className="bg-black w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-[12px] shrink-0 transition-transform duration-300 group-hover:rotate-90">
                                    <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </div>

                            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[300px] md:group-hover:max-h-40">
                                <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-4 md:pt-6">
                                    {post.meta.r2}
                                </p>
                            </div>
                        </div>

                        {/* ITEM 3 */}
                        <div className="bg-[#F3F7FA] rounded-[20px] p-5 md:p-6 group cursor-pointer transition-all duration-300 hover:shadow-md">
                            <div className="flex justify-between items-center gap-4">
                                <h3 className="text-[18px] md:text-[22px] font-bold text-gray-800 leading-tight">
                                    {post.meta.p3}
                                </h3>

                                <div className="bg-black w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-[12px] shrink-0 transition-transform duration-300 group-hover:rotate-90">
                                    <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </div>

                            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[300px] md:group-hover:max-h-40">
                                <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-4 md:pt-6">
                                    {post.meta.r3}
                                </p>
                            </div>
                        </div>

                        {/* ITEM 4 */}
                        <div className="bg-[#F3F7FA] rounded-[20px] p-5 md:p-6 group cursor-pointer transition-all duration-300 hover:shadow-md">
                            <div className="flex justify-between items-center gap-4">
                                <h3 className="text-[18px] md:text-[22px] font-bold text-gray-800 leading-tight">
                                    {post.meta.p4}
                                </h3>

                                <div className="bg-black w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-[12px] shrink-0 transition-transform duration-300 group-hover:rotate-90">
                                    <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </div>

                            <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[300px] md:group-hover:max-h-40">
                                <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-4 md:pt-6">
                                    {post.meta.r4}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}   