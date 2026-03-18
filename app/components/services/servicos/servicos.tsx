"use client";

import { useState } from "react";

export default function Servicos() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <section className="flex justify-center mt-[40px] md:mt-[60px] px-4">
                <div className="max-w-[1400px] w-full">
                    <h2 className="text-[32px] md:text-[48px] font-extrabold leading-[1.1]">
                        Conheça alguns dos <br /> nossos serviços
                    </h2>

                    <div className="mt-[50px] relative">
                        {/* Botão Voltar - Centralizado na borda esquerda */}
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-black text-white p-4 rounded-[8px] hover:bg-gray-800 transition-all duration-300 disabled:opacity-0 shadow-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        {/* Botão Avançar - Centralizado na borda direita */}
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= 3}
                            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-black text-white p-4 rounded-[8px] hover:bg-gray-800 transition-all duration-300 disabled:opacity-0 shadow-xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                            >
                                {/* Card 1 */}
                                <div className="w-1/2 flex-shrink-0 px-2">
                                    <div className="p-[50px] h-full flex flex-col justify-between border border-[#DADADA] rounded-[8px] bg-white">
                                        <div>
                                            <h3 className="text-[40px] leading-[1.1] font-extrabold">Branding & Design</h3>
                                            <p className="text-[19px] mt-[15px]">Foco: Posicionamento e Identidade.</p>
                                            <hr className="max-w-[200px] my-[30px] w-full border border-[#DADADA]" />
                                            <p className="text-[19px]"><strong>O que entregamos:</strong> Rebranding estratégico, Naming, Criação de Logotipos e Identidade Visual completa.</p>
                                            <p className="text-[19px] mt-[40px]"><strong>O diferencial:</strong> Criamos marcas que comunicam autoridade e facilitam a decisão de compra.</p>
                                        </div>
                                        <div className="flex gap-4 mt-[50px]">
                                            <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#0C1523] transition-all">
                                                Saiba mais
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="w-1/2 flex-shrink-0 px-2">
                                    <div className="p-[50px] h-full flex flex-col justify-between border border-[#DADADA] rounded-[8px] bg-white">
                                        <div>
                                            <h3 className="text-[40px] leading-[1.1] font-extrabold">Desenvolvimento Web</h3>
                                            <p className="text-[19px] mt-[15px]">Foco: Performance e Conversão.</p>
                                            <hr className="max-w-[200px] my-[30px] w-full border border-[#DADADA]" />
                                            <p className="text-[19px]"><strong>O que entregamos:</strong> Sites institucionais, Landing Pages de alta conversão e E-commerce.</p>
                                            <p className="text-[19px] mt-[40px]"><strong>O diferencial:</strong> Experiências digitais que carregam rápido e são otimizadas para SEO.</p>
                                        </div>
                                        <div className="flex gap-4 mt-[50px]">
                                            <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#0C1523] transition-all">
                                                Saiba mais
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="w-1/2 flex-shrink-0 px-2">
                                    <div className="p-[50px] h-full flex flex-col justify-between border border-[#DADADA] rounded-[8px] bg-white">
                                        <div>
                                            <h3 className="text-[40px] leading-[1.1] font-extrabold">SEO Estratégico</h3>
                                            <p className="text-[22px] mt-[15px]">Foco: Visibilidade Orgânica.</p>
                                            <hr className="max-w-[200px] my-[30px] w-full border border-[#DADADA]" />
                                            <p className="text-[22px]"><strong>O que entregamos:</strong> Auditoria técnica, pesquisa de palavras-chave e otimização de conteúdo on-page.</p>
                                            <p className="text-[22px] mt-[40px]"><strong>O diferencial:</strong> Colocamos sua marca na primeira página para quem já quer comprar seu produto.</p>
                                        </div>
                                        <div className="flex gap-4 mt-[50px]">
                                            <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#0C1523] transition-all">
                                                Saiba mais
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 4 */}
                                <div className="w-1/2 flex-shrink-0 px-2">
                                    <div className="p-[50px] h-full flex flex-col justify-between border border-[#DADADA] rounded-[8px] bg-white">
                                        <div>
                                            <h3 className="text-[40px] leading-[1.1] font-extrabold">Gestão de Tráfego</h3>
                                            <p className="text-[22px] mt-[15px]">Foco: ROI e Escala.</p>
                                            <hr className="max-w-[200px] my-[30px] w-full border border-[#DADADA]" />
                                            <p className="text-[22px]"><strong>O que entregamos:</strong> Campanhas no Google Ads, Meta Ads e relatórios de performance em tempo real.</p>
                                            <p className="text-[22px] mt-[40px]"><strong>O diferencial:</strong> Estratégias focadas em lucro líquido, não apenas em cliques ou curtidas.</p>
                                        </div>
                                        <div className="flex gap-4 mt-[50px]">
                                            <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#0C1523] transition-all">
                                                Saiba mais
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="w-full mt-[80px] mb-[80px] border-[#DADADA]" />
        </>
    );
}