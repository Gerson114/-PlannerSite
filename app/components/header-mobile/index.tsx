'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "./../../../public/LOGO PLANNER.webp";
import { Linkedin, ArrowRight } from "lucide-react";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const copyrightEl = document.getElementById('footer-copyright');
    if (copyrightEl) observer.observe(copyrightEl);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HEADER NO TOPO - NÃO FIXO */}
      <header className="lg:hidden w-full bg-white border-b border-gray-100 py-5">
        <div className="flex justify-center">
          <Image src={Logo} alt="Logo" width={115} height={38} priority />
        </div>
      </header>

      {/* Overlay de fundo */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[70] transition-opacity duration-500 lg:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Container da Navegação Flutuante */}
      <div
        className={`fixed inset-x-0 z-[80] lg:hidden px-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          footerVisible ? 'bottom-[120px]' : 'bottom-8'
        }`}
      >
        <div className="relative max-w-[500px] mx-auto">
          
          {/* MENU EXPANSÍVEL */}
          <div
            className={`absolute bottom-full left-0 right-0 mb-4 bg-[#432CF3] rounded-[28px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom shadow-2xl border border-white/10 ${
              menuOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
            }`}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <span className="text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">Navegação</span>
                <div className="flex gap-4">
                  <a href="#" className="text-white/60 hover:text-white transition-colors outline-none focus:outline-none">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
              
              <ul className="flex flex-col gap-5">
                {['Quem somos', 'Portfólio', 'Serviços', 'Blog'].map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={() => setMenuOpen(false)}
                      className="text-white text-2xl font-bold flex items-center justify-between group active:opacity-70 outline-none focus:outline-none"
                    >
                      {item}
                      <ArrowRight size={20} className="opacity-40 group-hover:opacity-100 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BARRA DE ÍCONES (Tab Bar) */}
          <div className="flex items-center gap-3">
            <div 
              className={`flex flex-1 items-center justify-between rounded-[22px] px-8 py-4 transition-all duration-500 ${
                menuOpen ? 'bg-[#432CF3] shadow-none' : 'bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20'
              }`}
            >
              <a 
                href="#home" 
                onClick={() => setMenuOpen(false)} 
                className="outline-none focus:outline-none active:scale-95 transition-transform"
              >
                <Image
                  src="https://casa-dos-transformadores.s3.us-east-1.amazonaws.com/HOME.png"
                  alt="Home" width={24} height={24}
                  className={menuOpen ? 'invert brightness-0' : 'opacity-60'}
                />
              </a>
              
              <a 
                href="#localizacao" 
                onClick={() => setMenuOpen(false)} 
                className="outline-none focus:outline-none active:scale-95 transition-transform"
              >
                <Image
                  src="https://casa-dos-transformadores.s3.us-east-1.amazonaws.com/LOCALIZA%C3%87%C3%83O.png"
                  alt="Localização" width={24} height={24}
                  className={menuOpen ? 'invert brightness-0' : 'opacity-60'}
                />
              </a>

              <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className={`p-1 transition-all duration-300 outline-none focus:outline-none active:scale-95 ${menuOpen ? 'rotate-90' : ''}`}
              >
                <Image
                  src="https://casa-dos-transformadores.s3.us-east-1.amazonaws.com/MENU.png"
                  alt="Menu" width={24} height={24}
                  className={menuOpen ? 'invert brightness-0' : 'opacity-100'}
                />
              </button>
            </div>

            {/* BOTÃO WHATSAPP */}
            <div className={`transition-all duration-500 ${menuOpen ? 'w-0 opacity-0 scale-0 overflow-hidden' : 'w-[75px] opacity-100 scale-100'}`}>
              <button className="outline-none focus:outline-none active:scale-90 transition-transform">
                <Image
                  src="https://casa-dos-transformadores.s3.us-east-1.amazonaws.com/whatsapp.png"
                  alt="WhatsApp" width={75} height={75}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}