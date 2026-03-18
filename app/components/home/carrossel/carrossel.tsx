"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const cases = [
  { id: 1, title: "Case 01", description: "Estratégia Digital" },
  { id: 2, title: "Case 02", description: "Branding & Design" },
  { id: 3, title: "Case 03", description: "Desenvolvimento Web" },
  { id: 4, title: "Case 04", description: "User Experience" },
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);
  const [cardsPorVez, setCardsPorVez] = useState(2);

  // Hook para detectar o tamanho da tela e ajustar a quantidade de cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCardsPorVez(1); // Mobile e Tablet
      } else {
        setCardsPorVez(2); // Desktop
      }
    };

    handleResize(); // Chama ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = cases.slice(index, index + cardsPorVez);

  const nextStep = () => {
    if (index + cardsPorVez < cases.length) setIndex(index + 1);
  };

  const prevStep = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="flex justify-center items-center min-h-[600px] bg-white p-6 md:p-10 font-sans overflow-hidden">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[1.2fr_2.8fr] gap-8 lg:gap-12 items-center">
        
        {/* Lado Esquerdo: Texto */}
        <div className="lg:pl-10 text-center lg:text-left">
          <h2 className="text-[28px] md:text-[48px] leading-[1.0] font-extrabold text-black mb-2 ">
            Nossos Cases
          </h2>
          <p className="text-[18px] md:text-[22px] text-gray-600 max-w-[400px] mx-auto lg:mx-0">
            Unimos estratégia de marca e tecnologia para transformar o potencial de nossos clientes em resultados reais.
          </p>
          
          {/* Botões Mobile: Visíveis apenas abaixo de LG */}
          <div className="flex gap-4 justify-center mt-8 lg:hidden">
             <button 
                onClick={prevStep}
                disabled={index === 0}
                className={`w-12 h-12 flex items-center justify-center rounded-[8px] transition-all ${index > 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextStep}
                disabled={index + cardsPorVez >= cases.length}
                className={`w-12 h-12 flex items-center justify-center rounded-[8px] transition-all ${index + cardsPorVez < cases.length ? 'bg-black text-white' : 'bg-gray-200 text-gray-400'}`}
              >
                <ChevronRight size={24} />
              </button>
          </div>
        </div>

        {/* Lado Direito: Container do Carrossel */}
        <div className="relative flex items-center">
          
          {/* Botão Voltar (Desktop) */}
          <div className="absolute -left-6 z-20 hidden lg:block">
            {index > 0 && (
              <button 
                onClick={prevStep}
                className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-[8px] hover:bg-zinc-800 transition-all shadow-xl"
              >
                <ChevronLeft size={32} strokeWidth={2} />
              </button>
            )}
          </div>

          {/* Área dos Cards */}
          <div className="flex gap-4 md:gap-6 w-full overflow-hidden py-4 h-[400px] md:h-[480px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleCards.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="flex-1 min-w-full md:min-w-[280px] h-full bg-white rounded-[24px] border border-gray-100 p-8 md:p-10 flex flex-col justify-end relative overflow-hidden shadow-sm"
                >
                  <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] mb-3 uppercase text-gray-400">
                    Discovery / 0{item.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black mb-2 leading-none uppercase tracking-tight text-black">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg leading-snug text-gray-700">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Botão Próximo (Desktop) */}
          <div className="absolute -right-6 z-20 hidden lg:block">
            {index + cardsPorVez < cases.length && (
              <button 
                onClick={nextStep}
                className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-[8px] hover:bg-zinc-800 transition-all shadow-xl"
              >
                <ChevronRight size={32} strokeWidth={2} />
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}