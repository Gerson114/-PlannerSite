"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    nome: "Mauro Osorio",
    cargo: "Diretor de Marketing - Seleção Brasileira",
    empresa: "Divmulti",
    texto: "Criamos estratégias inteligentes para conectar marcas ao seu público, gerar engajamento e impulsionar resultados reais.",
  },
  {
    id: 2,
    nome: "Ana Silva",
    cargo: "CEO - Tech Solutions",
    empresa: "TechSol",
    texto: "A parceria com a Planner transformou nossa presença digital. O foco em ROI e clareza estratégica foi o diferencial para nosso crescimento.",
  },
  {
    id: 3,
    nome: "Ricardo Santos",
    cargo: "Fundador - Innovate Co.",
    empresa: "Innovate",
    texto: "Resultados práticos e uma equipe extremamente qualificada. Eles realmente entendem a necessidade de estratégias sofisticadas e aplicáveis.",
  },
  {
    id: 4,
    nome: "Juliana Costa",
    cargo: "Head de Growth - Fashion Retail",
    empresa: "RetailUp",
    texto: "Excelente entrega. Conseguiram traduzir jargões técnicos em ações claras que trouxeram retorno imediato para nossa marca.",
  },
];

export default function Depoimentos() {
  const [index, setIndex] = useState(0);
  const [cardsPorVez, setCardsPorVez] = useState(2);

  // Lógica para detectar o tamanho da tela e ajustar a quantidade de cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPorVez(1);
      } else {
        setCardsPorVez(2);
      }
    };

    handleResize(); // Executa ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextStep = () => {
    if (index + cardsPorVez < depoimentos.length) setIndex(index + 1);
  };

  const prevStep = () => {
    if (index > 0) setIndex(index - 1);
  };

  const visibleCards = depoimentos.slice(index, index + cardsPorVez);

  return (
    <section className="flex justify-center pb-10 md:pb-20">
      <div className="max-w-[1400px] w-full px-4 md:px-10">
        
        {/* Header - Ajustado tamanhos de fonte para mobile */}
        <div className="mt-[60px] md:mt-[100px] mb-[40px] md:mb-[80px]">
          <h2 className="text-[32px] md:text-[48px] text-center font-extrabold ">
            Depoimentos
          </h2>
          <p className="text-[18px] md:text-[19px] text-center leading-tight md:leading-[1.1] text-gray-500 mt-1">
            Criamos estratégias inteligentes para conectar marcas <br className="hidden md:block" /> 
            ao seu público e impulsionar resultados reais
          </p>
        </div>

        {/* Container do Slider */}
        <div className="flex flex-col items-center">
          
          {/* Cards - Grid responsivo e min-height dinâmico */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[30px] w-full min-h-[450px] md:min-h-[300px] mb-10">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleCards.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col sm:flex-row bg-[#F3F7FA] rounded-[8px] gap-6 md:gap-[30px] p-6 md:p-[30px] items-start"
                >
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <div className="bg-[#432CF3] rounded-[8px] h-[140px] w-full sm:w-[180px] flex items-center justify-center text-white font-bold text-xl uppercase tracking-widest">
                      {item.empresa}
                    </div>
                    <div className="mt-4">
                      <p className="font-bold text-[18px] md:text-[19px] text-black leading-tight">
                        {item.nome}
                      </p>
                      <p className="text-[14px] md:text-[15px] text-gray-500 leading-tight mt-1">
                        {item.cargo}
                      </p>
                    </div>
                  </div>

                  <div className="pt-0 sm:pt-2">
                    <p className="text-[18px] md:text-[20px] leading-snug text-gray-700 italic">
                      "{item.texto}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Botões Centralizados */}
          <div className="flex gap-4">
            <button 
              onClick={prevStep}
              disabled={index === 0}
              className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-[8px] transition-all shadow-lg
                ${index === 0 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                  : "bg-black text-white hover:bg-zinc-800 active:scale-95"}`}
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              onClick={nextStep}
              disabled={index + cardsPorVez >= depoimentos.length}
              className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-[8px] transition-all shadow-lg
                ${index + cardsPorVez >= depoimentos.length 
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                  : "bg-black text-white hover:bg-zinc-800 active:scale-95"}`}
            >
              <ChevronRight size={28} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}