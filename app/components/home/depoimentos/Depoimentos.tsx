"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const depoimentos = [
    {
      nome: "Marcos Oliveira",
      cargo: "Fundador da TechFlow",
      texto: "A estratégia de marketing superou todas as nossas expectativas. O ROI no primeiro semestre foi surpreendente e a identidade visual nos posicionou em outro patamar no mercado.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
    },
    {
      nome: "Ana Beatriz",
      cargo: "Diretora Comercial",
      texto: "Trabalhar com essa equipe foi uma experiência transformadora. Eles conseguiram captar a alma da nossa marca e traduzi-la em resultados reais e mensuráveis.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60"
    },
  ];

  // Variantes para o container principal
  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      filter: "blur(10px)",
    }),
  };

  // Variantes para os elementos internos (Stagger effect)
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const changeSlide = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
    }
  };

  return (
    <section className="flex justify-center overflow-hidden w-full bg-white">
      <div className="max-w-[1400px] w-full px-4 sm:px-6 md:px-0 py-12 md:py-24">
        
        {/* Cabeçalho */}
        <div className="flex flex-row justify-between items-center mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[28px] sm:text-[35px] md:text-[50px] font-bold tracking-tight text-slate-900 leading-none"
          >
            Depoimentos
          </motion.h2>
          
          <div className="flex gap-2 md:gap-3">
            {[-1, 1].map((dir) => (
              <motion.button 
                key={dir}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => changeSlide(dir)} 
                className="flex items-center justify-center rounded-lg md:rounded-xl border border-gray-200 w-10 h-10 md:w-[55px] md:h-[55px] bg-white hover:border-[#432CF3] hover:text-[#432CF3] transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 md:w-5 md:h-5 ${dir === -1 ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Área de Conteúdo */}
        <div className="relative min-h-[550px] sm:min-h-[450px] lg:min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16 w-full bg-[#F3F7FA] p-6 sm:p-10 lg:p-16 rounded-[30px] md:rounded-[50px] border border-gray-100 shadow-inner"
            >
              {/* Imagem com Hover suave */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-square rounded-[25px] md:rounded-[35px] overflow-hidden border-4 border-white shadow-xl flex-shrink-0"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={depoimentos[currentIndex].img} 
                  alt={depoimentos[currentIndex].nome}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Conteúdo de Texto */}
              <div className="flex flex-col justify-center text-center lg:text-left flex-1">
                <motion.div 
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-1"
                >
                  <span className="text-[22px] sm:text-[26px] md:text-[32px] font-bold text-[#432CF3] leading-tight">
                    {depoimentos[currentIndex].nome}
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-slate-500 uppercase tracking-widest">
                    {depoimentos[currentIndex].cargo}
                  </span>
                </motion.div>

                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="mx-auto lg:mx-0 max-w-[150px] md:max-w-[200px] h-[1.5px] bg-slate-200 my-6 md:my-8" 
                />

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-[17px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-medium text-slate-800 leading-[1.3] tracking-tight italic"
                >
                  "{depoimentos[currentIndex].texto}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}