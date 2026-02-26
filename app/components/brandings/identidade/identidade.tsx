export default function Identidade() {
    return (
        <section className="flex justify-center px-4 mt-[-100px] py-12 lg:py-20">
            <div className="max-w-[1400px] w-full">

                {/* --- SEÇÃO 01: Identidade Visual --- */}
                <div className="max-w-[1000px]">
                    <h2 className="text-[36px] md:text-[50px] leading-[1.1] font-bold text-gray-900">
                        Transformando <br /> Identidade em Ativo
                    </h2>
                    <p className="mt-6 text-[18px] md:text-[24px] text-gray-700 leading-relaxed">
                        Para escalar com previsibilidade, uma empresa precisa de uma base sólida onde cada ponto de contato reforce sua autoridade. Nossa abordagem integra design, tecnologia e narrativa para garantir que sua presença digital seja uma extensão fiel do seu valor comercial.
                    </p>
                </div>

                {/* Grid com items-stretch para alinhar alturas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mt-10">
                    {/* Texto: order-1 no mobile, order-2 no desktop */}
                    <div className="flex flex-col space-y-8 py-2 order-1 lg:order-2">
                        <p className="text-[36px] md:text-[50px] font-extrabold leading-[1.1]">Branding e <br /> Identidade de Marca</p>
                        <p className="text-[18px] md:text-[22px]">Uma marca forte é aquela que ocupa um lugar
                            claro na mente do decisor. Atuamos na construção
                            de identidades que traduzem o propósito da
                            empresa em elementos visuais e verbais
                            magnéticos. É o ponto de partida para quem
                            busca deixar de ser apenas uma opção e passar a
                            ser a escolha óbvia</p>
                        <div className="flex flex-wrap items-center mt-[30px] gap-4">
                            <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all duration-300">
                                Saiba mais sobre este projeto
                            </button>
                        </div>
                    </div>
                    {/* Imagem: order-2 no mobile, order-1 no desktop */}
                    <div className="relative min-h-[400px] order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gray-200 rounded-[8px] overflow-hidden shadow-sm">
                            <img src="sua-imagem.jpg" alt="Identidade Visual" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO 02: Desenvolvimento Web --- */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mt-10">
                        <div className="relative min-h-[400px] order-2 lg:order-2">
                            <div className="absolute inset-0 bg-gray-200 rounded-[8px] overflow-hidden shadow-sm">
                                <img src="sua-imagem.jpg" alt="UI/UX" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-8 py-2 order-1 lg:order-1">
                            <p className="text-[36px] md:text-[50px] leading-[1.1] font-extrabold">Desenvolvimento Web de Alta Performance</p>
                            <p className="text-[18px] md:text-[22px]">O seu site é o seu principal ativo de conversão.
                                Desenvolvemos interfaces que equilibram estética
                                sofisticada com engenharia de ponta, priorizando
                                velocidade, segurança e navegabilidade. Uma
                                experiência fluida retém o usuário e acelera a
                                jornada de compra</p>
                            <div className="flex flex-wrap items-center mt-[30px] gap-4">
                                <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                                <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all duration-300">
                                    Saiba mais sobre este projeto
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO 03: E-commerce --- */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mt-10">
                        <div className="flex flex-col space-y-8 py-2 order-1 lg:order-2">
                            <p className="text-[36px] md:text-[50px] font-extrabold leading-[1.1]">E-commerce e Ecossistemas de Venda</p>
                            <p className="text-[18px] md:text-[22px]">Vender online exige mais do que uma vitrine;
                                exige um ecossistema integrado. Estruturamos
                                operações de comércio eletrônico focadas em
                                usabilidade e conversão, garantindo que a
                                tecnologia suporte o crescimento do volume de
                                transações sem perder a eficiência operacional</p>
                            <div className="flex flex-wrap items-center mt-[30px] gap-4">
                                <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                                <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all duration-300">
                                    Saiba mais sobre este projeto
                                </button>
                            </div>
                        </div>
                        <div className="relative min-h-[400px] order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gray-200 rounded-[8px] overflow-hidden shadow-sm">
                                <img src="sua-imagem.jpg" alt="Posicionamento" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO 04: Audiovisual --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mt-20">
                    <div className="relative min-h-[400px] order-2 lg:order-2">
                        <div className="absolute inset-0 bg-gray-200 rounded-[8px] overflow-hidden shadow-sm">
                            <img src="sua-imagem.jpg" alt="UI/UX" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-8 py-2 order-1 lg:order-1">
                        <p className="text-[36px] md:text-[50px] leading-[1.1] font-extrabold">Produção Audiovisual e Shooting</p>
                        <p className="text-[18px] md:text-[22px]">A imagem é o primeiro filtro de confiança do
                            cliente. Através de produções audiovisuais e
                            ensaios fotográficos profissionais, elevamos o
                            padrão visual da sua marca, humanizando a
                            entrega e tangibilizando a qualidade do seu
                            serviço ou produto</p>
                        <div className="flex flex-wrap items-center mt-[30px] gap-4">
                            <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all duration-300">
                                Saiba mais sobre este projeto
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO 05: Copywriting --- */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch mt-10">
                        <div className="flex flex-col space-y-8 py-2 order-1 lg:order-2">
                            <p className="text-[36px] md:text-[50px] font-extrabold leading-[1.1]">Engenharia de Conteúdo e Copywriting</p>
                            <p className="text-[18px] md:text-[22px]">A comunicação estratégica é o que converte
                                atenção em receita. Desenvolvemos narrativas
                                que articulam as dores do seu cliente e
                                apresentam suas soluções de forma persuasiva e
                                técnica, garantindo que cada palavra escrita tenha
                                uma função clara no funil de vendas</p>
                            <div className="flex flex-wrap items-center mt-[30px] gap-4">
                                <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                                <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all duration-300">
                                    Saiba mais sobre este projeto
                                </button>
                            </div>
                        </div>
                        <div className="relative min-h-[400px] order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gray-200 rounded-[8px] overflow-hidden shadow-sm">
                                <img src="sua-imagem.jpg" alt="Posicionamento" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}