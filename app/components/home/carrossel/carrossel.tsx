"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cases = [
    {
      categoria: "DESIGN",
      cliente: "NOVA IDEIA",
      titulo: "Design que \n comunica",
      descricao: "Desenvolvemos identidades visuais fortes e consistentes que traduzem a essência da marca.",
      link: "/cases/nova-ideia"
    },
    {
      categoria: "WEB",
      cliente: "TECH FLOW",
      titulo: "Experiências \n digitais",
      descricao: "Criamos sites e plataformas rápidas, intuitivas e responsivas, focadas em conversão.",
      link: "/cases/tech-flow"
    }
  ];

  // Variantes para o conteúdo de texto (efeito de revelação)
  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "20%" : "-20%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "20%" : "-20%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const changeSlide = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
    }
  };

  return (
    <div className="flex justify-center overflow-hidden w-full">
      <div className="max-w-[1400px] w-full px-6 md:px-0 mb-10 md:mb-20">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-10 md:mt-[80px] gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[35px] md:text-[50px] font-bold tracking-tight leading-tight"
          >
            Cases de Sucesso
          </motion.h2>
          
          <div className="flex gap-3 mb-2">
            {/* Botões com feedback tátil */}
            {[-1, 1].map((dir) => (
              <motion.button 
                key={dir}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => changeSlide(dir)} 
                className="flex items-center justify-center rounded-xl border border-gray-300 w-[50px] h-[50px] md:w-[55px] md:h-[55px] hover:border-[#432CF3] hover:text-[#432CF3] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 ${dir === -1 ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Área de Transição */}
        <div className="relative mt-10 md:mt-[40px] min-h-[650px] md:min-h-[550px]">
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
                opacity: { duration: 0.4 }
              }}
              className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-stretch w-full"
            >
              {/* Lado Esquerdo: Imagem */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[300px] md:h-full min-h-[300px] md:min-h-[500px] bg-gray-100 rounded-[30px] md:rounded-[40px] flex items-center justify-center text-gray-400 border border-gray-200 overflow-hidden shadow-inner"
              >
                <motion.span 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.2 }}
                  className="text-2xl md:text-4xl font-bold italic uppercase tracking-tighter text-center px-4"
                >
                  {cases[currentIndex].cliente}
                </motion.span>
              </motion.div>

              {/* Lado Direito: Texto com Stagger */}
              <motion.div 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col justify-center py-2"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="bg-[#432CF3]/10 text-[#432CF3] font-bold text-[10px] md:text-[12px] tracking-widest py-1 px-4 rounded-full uppercase"
                  >
                    {cases[currentIndex].categoria}
                  </motion.div>
                  <div className="text-gray-400 font-medium tracking-widest text-[10px] md:text-[12px]">
                    {cases[currentIndex].cliente}
                  </div>
                </div>

                <div className="mt-4 md:mt-6">
                  <h2 className="text-[32px] sm:text-[42px] md:text-[45px] lg:text-[55px] font-bold leading-[1.1] md:leading-[1] tracking-tighter text-slate-900 whitespace-pre-line">
                    {cases[currentIndex].titulo}
                  </h2>
                  
                  <p className="text-[16px] md:text-[18px] lg:text-[22px] text-gray-600 mt-4 md:mt-6 leading-relaxed">
                    {cases[currentIndex].descricao}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8 md:mt-10">
                    <div className="flex gap-4 w-full sm:w-auto">
                        <motion.a 
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          href={cases[currentIndex].link} 
                          className="flex items-center justify-center rounded-xl border border-gray-300 w-[55px] h-[55px] hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </motion.a>
                        
                        <motion.a 
                          whileHover={{ x: 5 }}
                          href={cases[currentIndex].link} 
                          className="flex-1 sm:flex-none text-center bg-[#432CF3] hover:bg-[#321fd1] text-white py-[16px] rounded-full px-8 font-semibold transition-all shadow-lg shadow-blue-500/20 text-sm md:text-base"
                        >
                            Saiba mais sobre este projeto
                        </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}