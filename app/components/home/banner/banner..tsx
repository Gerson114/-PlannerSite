"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    { t1: "Branding &", t2: "Design", link: "/branding" },
    { t1: "Criação &", t2: "Desenvolvimento", link: "/desenvolvimento" },
    { t1: "Trafego", t2: "pago", link: "/trafego" },
    { t1: "Servidor &", t2: "Hospedagem", link: "/hospedagem" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Variantes para animação de entrada (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Seção do Título Principal */}
      <div className="flex justify-center mt-[60px] lg:mt-[100px] px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] w-full"
        >
          <h1 className="text-[45px] text-center md:text-[80px] lg:text-[100px] leading-[0.9] md:leading-[0.8] tracking-tighter">
            <span className="font-bold">Marketing que </span>
            <br className="hidden md:block" />
            <motion.span 
              initial={{ color: "#000" }}
              animate={{ color: "#432CF3" }}
              transition={{ delay: 0.5, duration: 1 }}
            > impulsiona,</motion.span>
            <br className="hidden md:block" />
            <span className="font-bold"> resultados que </span>
            <br className="hidden md:block" />
            <span className="text-[#432CF3]"> transformam!</span>
          </h1>
        </motion.div>
      </div>

      {/* Seção dos Cards */}
      <div className="flex justify-center mt-[60px] lg:mt-[100px] flex-col items-center overflow-hidden">
        <div className="max-w-[1400px] w-full px-0">
          
          <motion.div 
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 overflow-x-auto md:overflow-visible pb-10 md:pb-0 scrollbar-hide snap-x snap-mandatory"
          >
            {cards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                className="group flex-shrink-0 w-[85%] md:w-full h-[320px] lg:h-[370px] rounded-3xl border border-gray-200 flex flex-col p-8 transition-all duration-300 cursor-pointer hover:bg-[#432CF3] hover:border-[#432CF3] snap-center shadow-sm hover:shadow-2xl"
              >
                <motion.div 
                  className="bg-black self-end w-12 h-12 rounded-lg flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#432CF3]"
                  whileHover={{ rotate: 45 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </motion.div>

                <h2 className="font-bold text-[22px] lg:text-[24px] mt-auto leading-[1.1] transition-colors duration-300 group-hover:text-white">
                  {card.t1} <br />
                  <span className="font-normal text-[#432CF3] group-hover:text-white/80">
                    {card.t2}
                  </span>
                </h2>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Botões de Navegação Mobile */}
        <div className="flex gap-4 mt-4 md:hidden">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center active:scale-90 transition-all hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center active:scale-90 transition-all hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}