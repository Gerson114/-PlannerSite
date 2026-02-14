"use client";
import { motion, Variants } from "framer-motion";

export default function Banner() {
  // Variantes para controlar o tempo de entrada dos elementos
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Intervalo entre o título e o parágrafo
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const, // Ease-out suave e profissional
      },
    },
  };

  return (
    <>
      <div className="flex justify-center">
        {/* Envolvemos o conteúdo no motion.div para orquestrar as crianças */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[1400px] w-full"
        >
          {/* Título com animação suave */}
          <motion.h2 
            variants={item}
            className="mt-[100px] text-center font-bold text-[80px] leading-[0.9]"
          >
            Tranformamos o seu <br />
            potencial em <br />
            <span className="font-normal text-[#432CF2]">crescimento real.</span>
          </motion.h2>

          {/* Parágrafo com animação suave */}
          <motion.p 
            variants={item}
            className="text-center mt-[30px] text-[22px]"
          >
            Simplificamos a complexidade para potencializar o seu crescimento. Na Planner, 
            unimos estratégia de marca e tecnologia para transformar o seu potencial em 
            resultados reais e mensuráveis.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}