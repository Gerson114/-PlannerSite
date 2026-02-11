import Image from "next/image";

export default function Construir() {
    return (
        <section className="flex justify-center px-4 md:px-10 py-10">
            <div className="max-w-[1400px] w-full">

                <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-20">

                    {/* Lado Esquerdo: Conteúdo */}
                    <div className="flex-1">
                        <h3 className="leading-[1.1] md:leading-[0.9] text-[32px] md:text-[42px] xl:text-[50px] font-bold">
                            Construindo marcas que
                            <span className="text-[#432CF3]"> conectam</span>
                        </h3>

                        {/* Borda AO REDOR (border completo) */}
                        <div className="mt-6 md:mt-10 border-gray-800 border-2 rounded-[15px] max-w-full xl:max-w-[800px] p-6 md:p-[24px]">
                            <p className="text-[22px] md:text-[30px] xl:text-[35px] leading-tight font-medium">
                                Transformamos a percepção da sua empresa em autoridade visual que convence.
                            </p>
                        </div>

                        <div>
                            <p className="max-w-full xl:max-w-[800px] text-[18px] md:text-[20px] xl:text-[24px] mt-6 md:mt-8 text-gray-700 leading-relaxed">
                                Sua marca comunica o valor real do seu negócio? Muitas empresas perdem grandes oportunidades por possuírem uma comunicação visual genérica ou desatualizada. No ambiente digital saturado de 2026, não ser notado é o mesmo que não existir. Se a sua marca não transmite confiança no primeiro segundo, seu potencial cliente buscará o concorrente. A Planner resolve essa desconexão através de um design que comunica autoridade, profissionalismo e propósito.
                            </p>
                        </div>
                    </div>

                    {/* Lado Direito: Card */}
                    <div className="flex flex-col items-center xl:items-start shrink-0">
                        <div className="w-full max-w-[400px] h-[250px] md:h-[300px] bg-gray-200 rounded-t-[20px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
                                alt="Especialista"
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="bg-[#F3F7FA] w-full max-w-[400px] p-6 md:p-8 flex flex-col justify-center rounded-b-[20px] shadow-sm">
                            <h3 className="font-bold leading-[1.1] md:leading-[0.9] text-[28px] md:text-[34px] xl:text-[40px]">
                                Gostaria de <br className="hidden md:block" /> falar com um Especialista?
                            </h3>
                            <button className="bg-[#0C1523] mt-[19px] text-white px-6 py-3 rounded-[25px] font-semibold hover:bg-black transition-all active:scale-95">
                                Quero saber mais!
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}