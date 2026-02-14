"use client";

import Image from "next/image";
import Link from "next/link"; 
import { usePathname } from "next/navigation"; 
import Logo from "./../../../public/LOGO PLANNER.webp";
import { useState, useEffect } from "react";

export default function Headertop() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Estado para o input de busca
    const [showScrollButton, setShowScrollButton] = useState(false);
    const pathname = usePathname(); 

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const menuItems = [
        { name: "Sobre", href: "/Quem-Somos" },
        { name: "Cases", href: "/portifolio" },
        { name: "Soluções", href: "/branding" }, 
        { name: "Blog", href: "/blog" },
        { name: "Contato", href: "/contato" },
    ];

    return (
        <>
            <nav className="flex justify-center py-4 md:py-6 border-b border-[#DADADA] bg-white w-full z-50 relative">
                <div className="max-w-[1400px] w-full px-4 sm:px-6">
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
                            
                            {/* LUPA COM INPUT EXPANSÍVEL */}
                            <div 
                                className="relative flex items-center group bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-500 ease-in-out px-3 py-2 cursor-pointer"
                                onMouseEnter={() => setIsSearchOpen(true)}
                                onMouseLeave={() => setIsSearchOpen(false)}
                            >
                                <div className="text-gray-500 group-hover:text-[#432CF3] transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                                
                                <input 
                                    type="text"
                                    placeholder="Buscar..."
                                    className={`bg-transparent outline-none text-sm transition-all duration-500 ease-in-out ${isSearchOpen ? 'w-40 ml-2 opacity-100' : 'w-0 opacity-0'}`}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 text-[19px] font-semibold text-black">
                                {menuItems.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`relative cursor-pointer group py-1 transition-colors duration-300 ${isActive ? 'text-[#432CF3]' : 'hover:text-[#432CF3]'}`}
                                        >
                                            {item.name}
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[#432CF3] rounded-full transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </Link>
                                    );
                                })}
                            </div>

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

            {/* BOTÃO SCROLL (Mantido) */}
            <div className={`fixed right-0 top-1/2 -translate-y-1/2 z-[100] transition-all duration-700 ${showScrollButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <button onClick={scrollToTop} className="flex flex-col items-center gap-4 bg-[#432CF3] text-white py-8 px-3 rounded-l-2xl shadow-2xl hover:pl-6 transition-all group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-2 transition-transform">
                        <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                    <span className="font-bold text-[10px] tracking-[0.2em] uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>ROLAR PARA CIMA</span>
                </button>
            </div>
        </>
    );
}