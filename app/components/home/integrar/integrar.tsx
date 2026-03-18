export default function Integra() {
    return (
        <section className="flex justify-center border-b border-[#DADADA] pb-12 md:pb-[100px] px-4 md:px-0">
                <div className="max-w-[1400px] w-full">

                    <div className="mt-12 md:mt-20">
                        {/* Título: diminui no mobile e remove o <br /> se necessário */}
                        <h2 className="text-3xl md:text-[48px] font-extrabold leading-[1.1] text-center md:text-left">
                            Por que integrar <br className="hidden md:block" /> tudo com a Planner?
                        </h2>

                        {/* Container do texto e card: empilha no mobile (flex-col) */}
                        <div className="flex flex-col mt-[-50px] lg:flex-row items-start lg:items-center gap-8 lg:gap-16">

                            <p className="text-lg md:text-[19px] mt-1 md:mt-[50px] text-gray-700 md:max-w-[50%]">
                                Quando você centraliza o Branding, Tecnologia e Marketing (Martech) em um único parceiro estratégico, você elimina o ruído. A comunicação flui, os dados se conectam e o seu crescimento se torna previsível. É a aplicação real da nossa crença: transformações geram resultados.
                            </p>

                            {/* Área do Card */}
                            <div className="w-full lg:flex-1 bg-gray-100 rounded-xl p-8 min-h-[200px] flex items-center justify-center border border-dashed border-gray-400">
                                <span className="text-gray-500 font-medium">Espaço para o Card</span>
                            </div>
                        </div>

                    </div>

                </div>
        </section>
    )
}