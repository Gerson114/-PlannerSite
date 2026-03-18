export default function Riscoinercia() {
    return (
        <>
            <div className="flex justify-center">
                <div className="max-w-[1400px] border rounded-[8px] w-full">

                    <div className="p-[50px]">
                        <h2 className="text-[50px] font-extrabold">O Risco da Inércia Digital</h2>

                        <p className="text-[22px] mt-[15px]">Empresas que não investem na profissionalização de sua experiência digital sofrem com
                            o lucro cessante. Sites obsoletos e marcas mal posicionadas não apenas perdem
                            vendas hoje, mas corroem a reputação a longo prazo, tornando o marketing cada vez
                            mais caro e menos eficaz.</p>

                        <p className="mt-[30px] text-[22px]">A integração entre uma identidade forte e uma plataforma tecnológica eficiente é o que
                            separa marcas líderes de empresas que apenas sobrevivem ao mercado..</p>







                        <div className="mt-[30px] flex justify-between items-center">
                            <p><strong className="text-[22px]">Sua estrutura digital está pronta para
                                sustentar o seu próximo nível de crescimento?</strong></p>

                            <div className="flex gap-4">
                                {/* Botão da Seta: Fundo Branco, Borda Preta */}
                                <button className="bg-white text-black border-2 border-black p-3 rounded-[15px] hover:bg-black hover:text-white transition-all duration-300 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>

                                {/* Botão Saiba Mais */}
                                <button className="py-[14px] px-[24px] text-white font-semibold rounded-[15px] bg-[#0C1523] hover:bg-[#0C1523] transition-all duration-300">
                                    Saiba mais sobre este projeto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}