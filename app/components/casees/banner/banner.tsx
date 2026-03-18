export default function Banner() {
    return (
        <section className="flex justify-center px-6 py-20 bg-white">
            <div className="max-w-[1400px] w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Coluna de Texto */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[32px] md:text-[50px] font-bold leading-[1.1] tracking-tight text-gray-900">
                            Transformações <br />
                            que geram <br />
                            <span className="font-normal text-[#432CF3]">resultados</span>
                        </h2>

                        <p className="text-xl lg:text-[22px] text-gray-600 max-w-[540px]">
                            Explore como a união entre estratégia de marca e tecnologia
                            impulsionou o crescimento real de alguns dos nossos parceiros.
                        </p>
                    </div>

                    {/* Coluna de Call to Action (Card) */}
                    <div className="flex justify-end h-full">
                        <div className="bg-[#432CF3] p-10 rounded-2xl text-white flex flex-col items-center justify-center text-center gap-6 shadow-xl w-full max-w-[500px]">

                            <p className="text-[40px] leading-[1.1] font-medium">
                                Gostaria de falar com um Especialista?
                            </p>

                            <button className="bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-900 transition-colors w-fit">
                                Agendar conversa
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}