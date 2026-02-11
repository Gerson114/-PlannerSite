export default function Identidade() {
    return (

        <section className="flex justify-center px-4 py-12 lg:py-20">
            <div className="max-w-[1400px] w-full">

                {/* Parte Superior: Título e Introdução (Ocupam a largura total ou controlada) */}
                <div className="max-w-[1000px] mb-12 lg:mb-16">
                    <h2 className="text-[36px] md:text-[50px] leading-[1.1] font-bold text-gray-900">
                        Identidade Visual: A Face da sua Autoridade
                    </h2>
                    <p className="mt-6 text-[18px] md:text-[24px] text-gray-700 leading-relaxed">
                        A identidade visual é o primeiro ponto de contato entre sua empresa e o mercado.
                        Na Planner, desenvolvemos sistemas visuais que garantem reconhecimento imediato e
                        transmitem profissionalismo. Uma identidade bem construída reduz o ciclo de vendas,
                        pois gera confiança instantânea.
                    </p>
                </div>

                {/* Parte Inferior: Grid apenas para os detalhes e a imagem */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Coluna de Texto (Detalhes) */}
                    <div className="space-y-10">
                        <div>
                            <p className="text-[18px] md:text-[22px] text-gray-700 leading-relaxed">
                                <strong className="text-black font-bold">- O que entregamos:</strong>   Construção de logotipo (versões principal e secundárias), definição de paleta cromática
                                com psicologia das cores, curadoria tipográfica e elementos gráficos de apoio
                                (texturas, ícones e padrões).
                            </p>
                        </div>

                        <div>
                            <p className="text-[18px] md:text-[22px] text-gray-700 leading-relaxed">
                                <strong className="text-black font-bold">- Diferencial:</strong> Focamos na aplicação digital, garantindo que sua marca seja legível em favicons,
                                perfis de redes sociais e resoluções 4K.
                            </p>
                        </div>
                    </div>

                    {/* Coluna da Imagem (Lado Direito) */}
                    <div className="w-full">
                        <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[300px] flex items-center justify-center shadow-sm">
                            <img
                                src="sua-imagem.jpg"
                                alt="Detalhes da Identidade Visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>







                <h2 className="text-[36px] md:text-[50px] leading-[1.1] font-bold text-gray-900 mt-12 lg:mt-20">
                    Rebranding: Adaptando-se <br /> ao Novo Mercado
                </h2>
                <p className="text-[22px] mt-[25px] text-gray-700" >O mercado muda, e sua marca não pode ficar estagnada. O Rebranding é indicado para empresas que cresceram, mudaram de foco ou cujas identidades visuais parecem datadas frente aos concorrentes. Nós preservamos o seu legado enquanto injetamos modernidade e relevância.</p>

                <div className="grid grid-cols-2">

                    <div className="w-full max-w-[600px]">
                        <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[300px] lg:min-h-[300px] flex items-center justify-center shadow-sm">
                            <img
                                src="sua-imagem.jpg"
                                alt="Detalhes da Identidade Visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>



                    <div>
                        <p className="text-[22px]"> <strong>O que entregamos:</strong> Auditoria de marca atual,
                            redesenho de símbolos, atualização de diretrizes visuais e estratégia de transição para o público.</p>

                            <p className="text-[22px] mt-[35px]"> <strong>Diferencial:</strong>-Analisamos as tendências de busca e comportamento do consumidor para garantir que a nova marca responda às demandas de busca atuais.</p>
                    </div>

                </div>

            </div>



        </section>
    );
}