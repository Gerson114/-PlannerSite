export default function ComoFazemos() {
    return (
        <>
            {/* Removido o mt fixo para evitar sobreposição e adicionado padding responsivo */}
            <div className="flex justify-center mt-[55px] bg-[#F3F7FA] px-4">
                <div className="max-w-[1400px] w-full">
                    {/* grid-cols-1 para mobile, lg:grid-cols-2 para desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-[100px] gap-10 lg:gap-25 items-start">

                        {/* Coluna Esquerda */}
                        {/* h-auto no mobile para o conteúdo não vazar, h-[500px] no desktop */}
                        <div className="bg-white h-auto lg:h-[500px] rounded-[19px] p-8 lg:p-[55px] flex flex-col justify-between shadow-sm">
                            <div className="flex flex-col items-center">
                                <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-bold text-center mb-[20px] lg:mb-[25px]">
                                    Como fazemos?
                                </h2>

                                <div className="max-w-[500px] w-full">
                                    <p className="text-[18px] lg:text-[22px] text-center leading-relaxed text-gray-700"> 
                                        Como transformamos conceitos em autoridade visual. Na Planner, não trabalhamos com "achismos". Nossa metodologia é baseada em dados, psicologia do consumo e design estratégico.
                                    </p>
                                </div>
                            </div>

                            {/* Bloco decorativo inferior - escondido ou reduzido no mobile se necessário, mas mantido conforme layout */}
                            <div className="bg-[#F3F7FA] p-8 lg:p-[50px] rounded-[19px] mt-8 lg:mt-0">
                            </div>
                        </div>

                        {/* Coluna Direita */}
                        {/* h-auto no mobile para acomodar o texto em telas pequenas */}
                        <div className="h-auto lg:h-[500px] p-4 lg:p-[55px] flex flex-col justify-center space-y-6 lg:space-y-0">
                            <p className="text-[18px] lg:text-[22px] lg:mb-[22px] leading-relaxed"> 
                                <strong>1. Imersão e Diagnóstico:</strong> Entendemos profundamente seu negócio, público-alvo e análise de concorrência.
                            </p>
                            <p className="text-[18px] lg:text-[22px] lg:mb-[22px] leading-relaxed"> 
                                <strong>2. Estratégia de Posicionamento:</strong> Definimos arquétipo e a mensagem central que sua marca deve transmitir.
                            </p>
                            <p className="text-[18px] lg:text-[22px] lg:mb-[22px] leading-relaxed"> 
                                <strong>3. Criação e Conceito:</strong> Nossa equipe de especialistas desenvolve alternativas visuais únicas e exclusivas.
                            </p>
                            <p className="text-[18px] lg:text-[22px] leading-relaxed">
                                <strong>4. Entrega e Implementação:</strong> Você recebe todos os arquivos e o treinamento necessário para aplicar sua nova identidade com perfeição.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}