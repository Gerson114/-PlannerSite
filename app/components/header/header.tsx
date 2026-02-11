"use client";

import Image from "next/image";
import Logo from "./../../../public/LOGO PLANNER.webp";

import { useState } from "react";

export default function Headertop() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["Quem somos", "Portifolio", "Serviços", "Blog"];

    return (
        <nav className="hidden lg:flex justify-center py-4 md:py-6 border-b border-[#737373] bg-white w-full sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1400px] w-full px-4 sm:px-0">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Logo com efeito de brilho no hover */}
                    <div className="flex justify-between items-center w-full md:w-auto">
                        <Image
                            src={Logo}
                            alt="Logo Planner"
                            className="w-32 h-auto transition-transform duration-300 hover:scale-105 hover:brightness-110"
                        />
                       

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-[#737373] hover:bg-purple-50 rounded-full transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Menu e Pesquisa */}
                    <div className={`${isOpen ? "max-h-[400px] opacity-100 mt-6" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"} overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out flex flex-col md:flex-row items-center gap-8 w-full md:w-auto`}>

                        {/* Input com Focus Dinâmico */}
                        <div className="relative flex items-center w-full md:w-[280px] group">
                            <input
                                type="text"
                                placeholder="O que você procura?"
                                className="w-full border border-gray-200 rounded-full px-5 py-2 text-sm outline-none bg-gray-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300"
                            />
                            <div className="absolute right-4 text-gray-400 group-focus-within:text-purple-600 group-focus-within:scale-110 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>

                        {/* Links com a Linha Mágica */}
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-[19px] font-semibold text-black]">
                            {menuItems.map((item) => (
                                <span
                                    key={item}
                                    className="relative cursor-pointer group py-1 hover:text-purple-600 transition-colors duration-300"
                                >
                                    {item}
                                    {/* Linha Animada Refinada */}
                                    <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-purple-600 rounded-full opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></span>
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}