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
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    const handleMouseEnter = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setactive(null);
            setAccordionOpen(null);
        }, 150);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div ref={headerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hidden md:block relative z-[999]">
            <nav className="flex justify-center py-0 bg-white w-full z-50 relative">
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

                                <div onMouseEnter={() => {
                                    if (closeTimeoutRef.current) {
                                        clearTimeout(closeTimeoutRef.current);
                                        closeTimeoutRef.current = null;
                                    }
                                    setactive("solucao");
                                }} onMouseLeave={handleMouseLeave} className={`hidden md:block transition-colors duration-300 p-10 ${active === "solucao" ? 'bg-[#F3F7FA]' : 'hover:bg-[#F3F7FA]'}`}>
                                    <Link onClick={() => setactive(active === "solucao" ? null : "solucao")} href="#" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${active === "solucao" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                        Soluções
                                        
                                    </Link>
                                </div>


                                <Link href="/pages/cases" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${pathname === "/pages/cases" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Cases
                                   
                                </Link>


                                <div onMouseEnter={() => {
                                    if (closeTimeoutRef.current) {
                                        clearTimeout(closeTimeoutRef.current);
                                        closeTimeoutRef.current = null;
                                    }
                                    setactive("sobre");
                                }} onMouseLeave={handleMouseLeave} className={`hidden md:block transition-colors duration-300 p-10 ${active === "sobre" ? 'bg-[#F3F7FA]' : 'hover:bg-[#F3F7FA]'}`}>
                                    <Link onClick={() => setactive(active === "sobre" ? null : "sobre")} href="#" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${active === "sobre" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                        Sobre
                                       
                                    </Link>
                                </div>


                                <Link href="/pages/blog" className={`relative hidden cursor-pointer group py-1 transition-colors duration-300 ${pathname === "/blog" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Blog
                                  
                                </Link>


                                <Link href="/pages/contato" className={`relative cursor-pointer group py-1 transition-colors duration-300 ${pathname === "/pages/contato" ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}>
                                    Contato
                                   
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 text-[19px] font-semibold text-black">
                            <button className="bg-black text-white py-[8px] px-[23px] rounded-[8px] flex items-center gap-2 group hover:bg-[#1a1a1a] transition-all">
                                <Link href={"/pages/contato"} className="text-[17px] font-medium">Fale Conosco</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>












            <div onMouseEnter={handleMouseEnter} className={`hidden md:flex justify-center absolute left-0 w-full z-[100] transition-all duration-500 ease-in-out transform ${active ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                <div onMouseLeave={() => setactive(null)} className="max-w-[1400px] w-full mt-0 p-8 bg-[#F3F7FA] rounded ">
                    <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch w-full">
                        <div className={`bg-white rounded-[8px] text-[16px] px-8 font-normal py-10 text-left space-y-4 shadow-sm ${active === "solucao" ? "w-[320px]" : "min-w-[280px]"}`}>
                            <p className="text-[17px] font-bold">
                                {active === "sobre" ? "Sobre a Planner" : <>Branding & <br /> Experiência Digital</>}
                            </p>
                            <hr className="w-full border border-[#DADADA]" />
                            <div className="flex flex-col gap-2">
                                {active === "sobre" ? (
                                    <div className="flex flex-col space-y-5">
                                        <Link href="/pages/Quem-Somos" className="hover:text-[#432CF3] hover:font-bold transition-colors">Quem somos</Link>
                                        <Link href="/pages/manifesto" className="hover:text-[#432CF3] hover:font-bold transition-colors">Manifesto</Link>
                                        <Link href="/pages/equipe" className="hover:text-[#432CF3] hover:font-bold transition-colors">Equipe</Link>
                                        <Link href="/pages/trabalhe-conosco" className="hover:text-[#432CF3] hover:font-bold transition-colors">Trabalhe conosco</Link>
                                    </div>
                                ) : (
                                    <div className="flex flex-col space-y-3">
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full hover:font-bold  text-left hover:text-[#432CF3] transition-colors flex justify-between items-center">
                                                <Link href="/pages/brandings" className="flex-1 ">Branding & Identidade</Link>
                                                <button onMouseEnter={() => setAccordionOpen("branding")} onClick={() => setAccordionOpen(accordionOpen === "branding" ? null : "branding")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "branding" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "branding" && (
                                                <div className="pl-4 pt-2 space-y-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/branding/naming" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Naming <br /> (Criação de Nomes)</Link>
                                                    <Link href="/pages/branding/design" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Design de Marca <br /> (Logotipo e Identidade Visual)</Link>
                                                    <Link href="/pages/branding/aplicacoes" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Aplicações de Marca <br /> (Materiais e  Pontos de <br /> Contato)</Link>
                                                    <Link href="/pages/branding/brandbook" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Brandbook (Guia de <br /> Estilo e Manual da Marca)</Link>
                                                    <Link href="/pages/branding/rebranding" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Rebranding (Estratégia <br /> de Reposicionamento)</Link>
                                                </div>
                                            )}
                                        </div>

                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] hover:font-bold  transition-colors flex justify-between items-center">
                                                <Link href="/pages/desenvolvimento" className="flex-1 ">Desenvolvimento Web <br /> de Alta Performance</Link>
                                                <button onMouseEnter={() => setAccordionOpen("dev")} onClick={() => setAccordionOpen(accordionOpen === "dev" ? null : "dev")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "dev" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "dev" && (
                                                <div className="pl-4 pt-2 space-y-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/desenvolvimento/websites" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Websites Institucionais <br /> e br Portais</Link>
                                                    <Link href="/pages/desenvolvimento/landing" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Landing Pages de Alta Conversão</Link>
                                                    <Link href="/pages/desenvolvimento/hotsites" className="block text-[16px] text-gray-600 hover:font-bold hover:text-[#432CF3] transition-colors">Hotsites para Campanhas <br /> e Lançamentos</Link>
                                                </div>
                                            )}
                                        </div>
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] hover:font-bold  transition-colors flex justify-between items-center">
                                                <Link href="/pages/ecommerce" className="flex-1 ">E-commerce & <br /> Ecossistemas de Venda</Link>
                                                <button onMouseEnter={() => setAccordionOpen("ecommerce")} onClick={() => setAccordionOpen(accordionOpen === "ecommerce" ? null : "ecommerce")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "ecommerce" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "ecommerce" && (
                                                <div className="pl-4 pt-2 space-y-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/ecommerce/lojas" className="block text-[16px] text-gray-600 hover:text-[#432CF3] hover:font-bold transition-colors">Implementação de <br /> Lojas Virtuais</Link>
                                                    <Link href="/pages/ecommerce/ux" className="block text-[16px] text-gray-600 hover:text-[#432CF3] hover:font-bold transition-colors">UX/UI Design focado em Checkout e Conversão</Link>
                                                </div>
                                            )}
                                        </div>
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] hover:font-bold  transition-colors flex justify-between items-center">
                                                <Link href="/pages/audiovisual" className="flex-1 ">Produção Audiovisual & <br /> Shooting</Link>
                                                <button onMouseEnter={() => setAccordionOpen("audiovisual")} onClick={() => setAccordionOpen(accordionOpen === "audiovisual" ? null : "audiovisual")} className="p-1 bg-black rounded">
                                                    <svg className={`w-4 h-4 text-white transition-transform ${accordionOpen === "audiovisual" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "audiovisual" && (
                                                <div className="pl-4 pt-2 space-y-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/audiovisual/roteiro" className="block text-[16px] hover:font-bold text-gray-600 hover:text-[#432CF3] transition-colors">Roteirização (Estratégia <br /> e Storytelling)</Link>
                                                    <Link href="/pages/audiovisual/foto" className="block text-[16px] hover:font-bold text-gray-600 hover:text-[#432CF3] transition-colors">Fotografia Profissional <br /> (Shooting de Produtos e Corporativo)</Link>
                                                    <Link href="/pages/audiovisual/video" className="block text-[16px] hover:font-bold text-gray-600 hover:text-[#432CF3] transition-colors">Captura de Vídeos <br /> (Publicitários e Institucionais)</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>






                        {active === "solucao" && (
                            <div className="bg-white rounded-[8px] text-[16px] px-8 font-normal py-10 text-left space-y-4 shadow-sm w-[320px]">
                                <p className="text-[17px] font-bold  tracking-wider text-black">
                                    Growth & <br /> Performance
                                </p>

                                <hr className="w-full border border-[#DADADA]" />

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col space-y-3">
                                        {/* BRANDING */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/branding" className="flex-1 group-hover:font-bold">Gestão de Tráfego Pago</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("Growth")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "Growth" ? null : "Growth")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "Growth" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "Growth" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/branding/naming" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Google Ads & YouTube Ads</Link>
                                                    <Link href="/pages/branding/design" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Meta Ads (Instagram <br /> e Facebook)</Link>
                                                    <Link href="/pages/branding/brandbook" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Social Ads de Nicho <br /> (TikTok Ads e LinkedIn Ads)</Link>
                                                    <Link href="/pages/branding/brandbook" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Estratégias Avançadas de <br /> Remarketing Multicanal</Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* DESENVOLVIMENTO */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/desenvolvimento" className="flex-1 group-hover:font-bold">SEO Full Stack (Otimização)</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("seo")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "seo" ? null : "seo")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "seo" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "seo" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/desenvolvimento/websites" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">SEO Local e Google Maps</Link>
                                                    <Link href="/pages/desenvolvimento/landing" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">SEO para E-commerce</Link>
                                                    <Link href="/pages/desenvolvimento/landing" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]"> SEO para Voz <br /> (Voice Search) e Mobile</Link>
                                                    <Link href="/pages/desenvolvimento/landing" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Dados Estruturados <br />  e Otimização  de  Performance  <br /> (Core Web Vitals)</Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* Estratégia de Inbound Marketing */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/ecommerce" className="flex-1 group-hover:font-bold">Estratégia de Inbound Marketing</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("estrategia")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "estrategia" ? null : "estrategia")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "estrategia" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "estrategia" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/ecommerce/lojas" className="block text-[15px] hover:font-bold text-gray-600 hover:text-[#432CF3]">Gestão de Funis <br /> de Atração e Nutrição</Link>
                                                    <Link href="/pages/ecommerce/ux" className="block text-[15px]  hover:font-bold text-gray-600 hover:text-[#432CF3]">Marketing de Conteúdo <br /> Estratégico</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}












                        {active === "solucao" && (
                            <div className="bg-white rounded-[8px] text-[16px] px-8 font-normal py-10 text-left space-y-4 shadow-sm w-[320px]">
                                <p className="text-[17px] font-bold  tracking-wider text-black">
                                    IA, Customer Experience &  Gestão de Atendimento
                                </p>

                                <hr className="w-full border border-[#DADADA]" />

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col space-y-3">
                                        {/* BRANDING */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/branding" className="flex-1 group-hover:font-bold">Inteligência Artificial & <br /> Agentes Conversacionais</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("ia")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "ia" ? null : "ia")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "ia" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "ia" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/branding/naming" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Implementação de IA <br /> Generativa para Atendimento (LLMs)</Link>
                                                    <Link href="/pages/branding/design" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]"> Treino de Base de <br /> Conhecimento Própria (RAG)</Link>

                                                </div>
                                            )}
                                        </div>

                                        {/* DESENVOLVIMENTO */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/desenvolvimento" className="flex-1 group-hover:font-bold">Automação de Atendimento (Chatbots)</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("automacao")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "automacao" ? null : "automacao")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "automacao" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "automacao" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/desenvolvimento/websites" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Automação para WhatsApp <br /> Business API</Link>
                                                    <Link href="/pages/desenvolvimento/landing" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Soluções para Instagram, <br /> Messenger e Google Business</Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* E-COMMERCE */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/ecommerce" className="flex-1 group-hover:font-bold">Automação de Marketing Multicanal</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("aut")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "aut" ? null : "aut")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "aut" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "aut" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/ecommerce/lojas" className="block text-[15px] hover:font-bold text-gray-600 hover:text-[#432CF3]">Automação de E-mail, <br /> SMS e RCS</Link>
                                                    <Link href="/pages/ecommerce/ux" className="block text-[15px] hover:font-bold text-gray-600 hover:text-[#432CF3]">Fluxos de Engajamento em Redes Sociais</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}








                        {active === "solucao" && (
                            <div className="bg-white rounded-[8px] text-[16px] px-8 font-normal py-10 text-left space-y-4 shadow-sm w-[320px]">
                                <p className="text-[17px] font-bold  tracking-wider text-black">
                                    Infra, Dados & <br /> Segurança
                                </p>

                                <hr className="w-full border border-[#DADADA]" />

                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-col space-y-3">
                                        {/* BRANDING */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/branding" className="flex-1 group-hover:font-bold">Cloud Engineering & Hosting</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("infra1")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "infra1" ? null : "infra1")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "infra1" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "infra1" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/branding/naming" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Hospedagem Cloud <br /> e Cloud Native</Link>
                                                    <Link href="/pages/branding/design" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Arquitetura de <br /> Microsserviços e Escalabilidade</Link>
                                                    <Link href="/pages/branding/brandbook" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]"> Gestão de Infraestrutura <br /> como Código (IaC)</Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* DESENVOLVIMENTO */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/desenvolvimento" className="flex-1 group-hover:font-bold">Segurança & Compliance (Cybersecurity)</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("infra2")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "infra2" ? null : "infra2")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "infra2" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "infra2" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/desenvolvimento/websites" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Consultoria de Adequação <br /> à LGPD e Gestão de Cookies</Link>
                                                    <Link href="/pages/desenvolvimento/landing" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Ethical Hacking <br /> e  Testes de Vulnerabilidade</Link>
                                                    <Link href="/pages/desenvolvimento/landing" className="block text-[15px] text-gray-600 hover:font-bold hover:text-[#432CF3]">Gestão de DNS e Monitorização <br /> DMARC (Blindagem de Domínio)
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* Cultura de Dados (Analytics & BI) */}
                                        <div onMouseLeave={() => setAccordionOpen(null)}>
                                            <div className="w-full text-left hover:text-[#432CF3] transition-colors flex justify-between items-center group">
                                                <Link href="/pages/ecommerce" className="flex-1 group-hover:font-bold">Cultura de Dados <br /> (Analytics & BI)</Link>
                                                <button
                                                    onMouseEnter={() => setAccordionOpen("cultura")}
                                                    onClick={() => setAccordionOpen(accordionOpen === "cultura" ? null : "cultura")}
                                                    className="p-1 bg-black rounded hover:bg-[#432CF3] transition-colors"
                                                >
                                                    <svg className={`w-4 h-4 text-white transition-transform duration-300 ${accordionOpen === "cultura" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {accordionOpen === "cultura" && (
                                                <div className="pl-4 pt-3 space-y-3 border-l-2 border-[#F3F7FA] mt-2 overflow-hidden transition-all duration-300 ease-out animate-[slideDown_0.3s_ease-out]">
                                                    <Link href="/pages/ecommerce/lojas" className="block text-[15px] hover:font-bold text-gray-600 hover:text-[#432CF3]">Implementação de GA4 <br /> e Google Tag Manager (GTM)</Link>
                                                    <Link href="/pages/ecommerce/ux" className="block text-[15px] hover:font-bold text-gray-600 hover:text-[#432CF3]">Dashboards Inteligentes <br /> (Looker Studio)</Link>
                                                    <Link href="/pages/ecommerce/ux" className="block text-[15px] hover:font-bold text-gray-600 hover:text-[#432CF3]">astreamento Avançado (UTM Tracking e Encurtadores <br /> Próprios)</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
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
                                        <button className="p-3 px-6 font-bold bg-[#2CF376] rounded-[8px] hover:brightness-105 transition-all">
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




            <div className={`fixed right-8 top-1/2 -translate-y-1/2 z-[100] transition-all duration-700 ${showScrollButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                 

                  <button onClick={scrollToTop} className="flex flex-col mb-[18px] items-center gap-4 bg-white text-black py-2 px-3 rounded-[8px] border border-black  hover:border-[#432CF3] hover:text-[#432CF3] transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                    </svg>
                </button>

                <button onClick={scrollToTop} className="flex hover:scale-103  flex-col items-center gap-4 bg-white hover:bg-[#F3F7FA] text-black py-8 px-3 rounded-[8px] border border-black  transition-all group">

                    
                  
                    <span className="font-bold  text-[10px]  text-[15px] " style={{ writingMode: 'vertical-rl' }}>Voltar ao Início</span>
                </button>
                
            </div>

            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hidden md:flex fixed right-8 bottom-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            </a>
        </div>
        
    )
}
