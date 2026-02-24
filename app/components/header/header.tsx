"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./../../../public/LOGO PLANNER.webp";
import { useState, useEffect, useRef } from "react";
import img from "./../../../public/IMAGEM BANNER SITE PLANNER.webp"

export default function Headertop() {
    const [isOpen, setIsOpen] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [active, setactive] = useState<string | null>(null)
    const [accordionOpen, setAccordionOpen] = useState<string | null>(null)
    const pathname = usePathname();

    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setactive(null);
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setactive(null);
            }
        };

        if (active) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [active]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div ref={headerRef} className="relative z-[999]">
            <nav className="flex justify-center py-4 md:py-6 bg-white w-full z-50 relative">
                <div className="max-w-[1800px] w-full px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex justify-between items-center w-full md:w-auto">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    alt="Logo Planner"
                                    className="w-32 h-auto transition-transform duration-300 hover:scale-105 hover:brightness-110"
                                />
                            </Link>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 text-[#737373] hover:bg-purple-50 rounded-full transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                                    {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
                                </svg>
                            </button>
                        </div>

                        <div className={`${isOpen ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"} overflow-hidden md:overflow-visible transition-all duration-500 flex flex-col md:flex-row items-center md:gap-20 w-full md:w-auto`}>
                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 text-[19px] font-semibold text-black">
                                <Link onClick={() => setactive(active === "solucao" ? null : "solucao")} href="#" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${active === "solucao" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Soluções
                                    <span className={`absolute bottom-0 left-0 h-[3px] bg-[#432CF3] rounded-full transition-all duration-500 ${active === "solucao" ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                                <Link href="/portifolio" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${pathname === "/portifolio" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Cases
                                    <span className={`absolute bottom-0 left-0 h-[3px] bg-[#432CF3] rounded-full transition-all duration-500 ${pathname === "/portifolio" ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                                <Link onClick={() => setactive(active === "sobre" ? null : "sobre")} href="#" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${active === "sobre" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Sobre
                                    <span className={`absolute bottom-0 left-0 h-[3px] bg-[#432CF3] rounded-full transition-all duration-500 ${active === "sobre" ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                                <Link href="/blog" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${pathname === "/blog" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Blog
                                    <span className={`absolute bottom-0 left-0 h-[3px] bg-[#432CF3] rounded-full transition-all duration-500 ${pathname === "/blog" ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                                <Link href="/contato" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${pathname === "/contato" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Contato
                                    <span className={`absolute bottom-0 left-0 h-[3px] bg-[#432CF3] rounded-full transition-all duration-500 ${pathname === "/contato" ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 text-[19px] font-semibold text-black">
                            <button className="bg-black text-white py-[8px] px-[23px] rounded-[15px] flex items-center gap-2 group hover:bg-[#1a1a1a] transition-all">
                                <span className="text-[17px] font-medium">Fale Conosco</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
  











            <div className={`hidden md:flex justify-center absolute left-0 w-full z-[100] transition-all duration-500 ease-in-out transform ${active ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                <div className="max-w-[1400px] w-full mt-0 p-8 bg-[#F3F7FA] rounded shadow-2xl">
                    <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch w-full">
                        <div className="bg-white rounded-[8px] text-[16px] px-8 font-normal py-10 text-left space-y-4 shadow-sm min-w-[280px]">
                            <p className="text-[17px] font-bold">
                                {active === "sobre" ? "Sobre a Planner" : " BRANDING &  EXPERIÊNCIA DIGITAL"}
                            </p>
                            <hr className="w-full border border-[#DADADA]" />
                            <div className="flex flex-col gap-2">
                                {active === "sobre" ? (
                                    <div className="flex flex-col space-y-5">
                                        <Link href="/Quem-Somos" className="hover:text-[#432CF3] hover:font-bold transition-colors">Quem somos</Link>
                                        <Link href="/manifesto" className="hover:text-[#432CF3] hover:font-bold transition-colors">Manifesto</Link>
                                        <Link href="/equipe" className="hover:text-[#432CF3] hover:font-bold transition-colors">Equipe</Link>
                                        <Link href="/trabalhe-conosco" className="hover:text-[#432CF3] hover:font-bold transition-colors">Trabalhe conosco</Link>
                                    </div>
                                ) : (
                                    <div className="flex flex-col space-y-3">
                                        <div>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center">
                                                <Link href="/branding" className="flex-1 hover:font-bold ">Branding & Identidade</Link>
                                                <button onClick={() => setAccordionOpen(accordionOpen === "branding" ? null : "branding")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "branding" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "branding" && (
                                                <div className="pl-4 pt-2 space-y-2">
                                                    <Link href="/branding/naming" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Naming <br /> (Criação de Nomes)</Link>
                                                    <Link href="/branding/design" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Design de Marca <br /> (Logotipo e Identidade Visual)</Link>
                                                    <Link href="/branding/aplicacoes" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Aplicações de Marca <br /> (Materiais e Pontos de Contato)</Link>
                                                    <Link href="/branding/brandbook" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Brandbook <br /> (Guia de Estilo e Manual da Marca)</Link>
                                                    <Link href="/branding/rebranding" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Rebranding <br /> (Estratégia de Reposicionamento)</Link>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center">
                                                <Link href="/desenvolvimento" className="flex-1 hover:font-bold">Desenvolvimento Web <br /> de Alta Performance</Link>
                                                <button onClick={() => setAccordionOpen(accordionOpen === "dev" ? null : "dev")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "dev" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "dev" && (
                                                <div className="pl-4 pt-2 space-y-2">
                                                    <Link href="/desenvolvimento/websites" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Websites Institucionais e Portais</Link>
                                                    <Link href="/desenvolvimento/landing" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Landing Pages de Alta Conversão</Link>
                                                    <Link href="/desenvolvimento/hotsites" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Hotsites para Campanhas e Lançamentos</Link>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center">
                                                <Link href="/ecommerce" className="flex-1 hover:font-bold">E-commerce & <br /> Ecossistemas de Venda</Link>
                                                <button onClick={() => setAccordionOpen(accordionOpen === "ecommerce" ? null : "ecommerce")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "ecommerce" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "ecommerce" && (
                                                <div className="pl-4 pt-2 space-y-2">
                                                    <Link href="/ecommerce/lojas" className="block text-[16px] text-gray-600 hover:text-[#432CF3] hover:font-bold transition-colors">Implementação de Lojas Virtuais</Link>
                                                    <Link href="/ecommerce/ux" className="block text-[16px] text-gray-600 hover:text-[#432CF3] hover:font-bold transition-colors">UX/UI Design focado em Checkout e Conversão</Link>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center">
                                                <Link href="/audiovisual" className="flex-1 hover:font-bold">Produção Audiovisual & <br /> Shooting</Link>
                                                <button onClick={() => setAccordionOpen(accordionOpen === "audiovisual" ? null : "audiovisual")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "audiovisual" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "audiovisual" && (
                                                <div className="pl-4 pt-2 space-y-2">
                                                    <Link href="/audiovisual/roteiro" className="block text-[16px] hover:font-bold text-gray-600 hover:text-[#432CF3] transition-colors">Roteirização <br /> (Estratégia e Storytelling)</Link>
                                                    <Link href="/audiovisual/foto" className="block text-[16px] hover:font-bold text-gray-600 hover:text-[#432CF3] transition-colors">Fotografia Profissional <br /> (Shooting de Produtos e Corporativo)</Link>
                                                    <Link href="/audiovisual/video" className="block text-[16px] hover:font-bold text-gray-600 hover:text-[#432CF3] transition-colors">Captura de Vídeos <br /> (Publicitários e Institucionais)</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        

                        {active === "solucao" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                                <Link href="/branding" className="group flex flex-col justify-between p-6 bg-white hover:bg-gradient-to-br hover:from-[#DFDBFC] hover:to-white rounded-[8px] transition-all duration-500 shadow-sm hover:shadow-md border border-transparent hover:border-[#432CF3]/20">
                                    <div className="flex items-center justify-center bg-amber-300 gap-4 w-full py-4">
                                        <p className="text-[19px] font-bold text-gray-900 leading-tight group-hover:text-[#432CF3] transition-colors whitespace-nowrap">
                                            Growth & Performance
                                        </p>

                                        <div className="p-2 w-fit border border-black rounded-[8px] group-hover:bg-[#432CF3] group-hover:border-[#432CF3] group-hover:text-white transition-all shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>








                                    
                                    <div className="mt-8">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#432CF3]">Ver mais</span>
                                    </div>
                                </Link>

                                <Link href="/desenvolvimento" className="group flex flex-col justify-between p-6 bg-white hover:bg-gradient-to-br hover:from-[#DFDBFC] hover:to-white rounded-[8px] transition-all duration-500 shadow-sm hover:shadow-md border border-transparent hover:border-[#432CF3]/20">
                                    <div className="space-y-4">
                                        <div className="p-2 w-fit border border-black rounded-[8px] group-hover:bg-[#432CF3] group-hover:border-[#432CF3] group-hover:text-white transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                        <p className="text-[19px] font-bold text-gray-900 leading-tight group-hover:text-[#432CF3] transition-colors">
                                            Desenvolvimento Web
                                        </p>
                                    </div>
                                    <div className="mt-8">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#432CF3]">Ver mais</span>
                                    </div>
                                </Link>

                                <Link href="/marketing" className="group flex flex-col justify-between p-6 bg-white hover:bg-gradient-to-br hover:from-[#DFDBFC] hover:to-white rounded-[8px] transition-all duration-500 shadow-sm hover:shadow-md border border-transparent hover:border-[#432CF3]/20">
                                    <div className="space-y-4">
                                        <div className="p-2 w-fit border border-black rounded-[8px] group-hover:bg-[#432CF3] group-hover:border-[#432CF3] group-hover:text-white transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                        <p className="text-[19px] font-bold text-gray-900 leading-tight group-hover:text-[#432CF3] transition-colors">
                                            Marketing Digital
                                        </p>
                                    </div>
                                    <div className="mt-8">
                                        <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#432CF3]">Ver mais</span>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {active === "sobre" && (
                            <div className="flex flex-1 w-full bg-gradient-to-r from-[#DFDBFC] to-white rounded-[8px] overflow-hidden">
                                <div className="flex-1 my-auto">
                                    <p className="p-9 leading-[1.1] text-[52px] font-bold text-gray-900">
                                        IA, Customer Experience <br />
                                        & Gestão de Atendimento
                                    </p>
                                    <div className="px-9 gap-4 flex pb-9">
                                        <div className="p-3 border border-black rounded-[8px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                        <button className="p-3 px-6 font-bold bg-[#2CF376] rounded-[25px] hover:brightness-105 transition-all">
                                            Saiba mais
                                        </button>
                                    </div>
                                </div>
                                <div className="flex p-7 justify-center">
                                    <div className="pr-4 max-w-[500px] w-full">
                                        <Image src={img} width={250} height={80} alt="image" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-[100] transition-all duration-700 ${showScrollButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <button onClick={scrollToTop} className="flex flex-col items-center gap-4 bg-[#432CF3] text-white py-8 px-3 rounded-l-2xl shadow-2xl hover:pl-6 transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-2 transition-transform">
                        <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    <span className="font-bold text-[10px] tracking-[0.2em] uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>ROLAR PARA CIMA</span>
                </button>
            </div>
        </div>
    );
}
