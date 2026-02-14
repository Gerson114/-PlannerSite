"use client";
import { motion, Variants } from "framer-motion";

export default function Marketing() {
  // Variantes para o container de texto (stagger children)
  // Definindo o tipo como Variants para evitar erros de index signature
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // Usando "as const" para o TypeScript entender a curva de Bézier como um valor fixo
        ease: [0.22, 1, 0.36, 1] as const 
      } 
    },
  };

  return (
    <>
      <div className="flex justify-center px-4 md:px-8 lg:px-10 overflow-x-clip">
        <div className="max-w-[1400px] w-full relative">
          
          {/* Enfeite Azul Animado */}
          <motion.div 
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-50vw] left-[85%] h-[20%] bg-[#432CF3] rounded-l-[40px] z-0" 
          />

          {/* Container Principal */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between border border-gray-300 rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 mt-[40px] md:mt-[60px] gap-10 bg-white relative z-10 shadow-sm"
          >
            
            {/* Lado Esquerdo: Texto e Botões */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 w-full z-10"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-[38px] sm:text-[55px] md:text-[65px] lg:text-[80px] leading-[0.9] md:leading-[0.85] font-bold tracking-tighter text-slate-900"
              >
                Marketing que
                <br /> 
                <span className="text-[#432CF3]"> impulsiona,</span> 
                <br /> 
                resultados que 
                <br />
                <span className="text-[#432CF3]">transformam!</span>
              </motion.h3>

              {/* Container de Botões */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 mt-8 md:mt-12"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center rounded-2xl border border-gray-300 w-[55px] h-[55px] md:w-[60px] md:h-[60px] hover:bg-gray-50 hover:border-[#432CF3] hover:text-[#432CF3] transition-colors shadow-sm group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#321fd1" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:flex-none bg-[#432CF3] text-white py-[16px] md:py-[18px] px-6 md:px-10 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20 text-sm md:text-lg"
                >
                  Saiba mais sobre este projeto
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Lado Direito: Quadrado Visual com Flutuação */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Efeito de brilho/glow atrás da imagem no hover */}
              <div className="absolute inset-0 bg-[#432CF3]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full sm:w-[80%] md:w-[400px] lg:w-[400px] aspect-square bg-gray-50 rounded-[30px] md:rounded-[60px] flex-shrink-0 border border-gray-200 overflow-hidden relative shadow-sm z-20"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
                   <motion.span 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase text-center px-4"
                   >
                     Sua Imagem Aqui
                   </motion.span>
                 </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </>
  );
}