"use client";
import { motion, Variants } from "framer-motion";

export default function Estrategia() {
  // Variantes para o container de texto (faz os filhos aparecerem em sequência)
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes para cada item de texto
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  return (
    <section className="flex justify-center mt-[60px] md:mt-[100px] px-4">
      {/* Container Principal com animação de entrada */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#F3F7FA] rounded-[40px] p-[30px] md:p-[80px] max-w-[1400px] w-full"
      >
        
        {/* Cabeçalho da Seção */}
        <div className="mb-[50px] md:mb-[80px]">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[35px] md:text-[55px] leading-[1.1] font-bold text-[#1A1A1A]"
          >
            Onde a Estratégia <br className="hidden md:block" /> encontra a Tecnologia.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[18px] md:text-[22px] mt-[20px] leading-[1.4] text-gray-600 max-w-[700px]"
          >
            Nossa abordagem é metódica, transparente e, acima de tudo, orientada ao sucesso do cliente.
          </motion.p>
        </div>

        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[60px] items-center">

          {/* Lado Esquerdo: Visual/Imagem */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -10 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-white rounded-[30px] h-[350px] md:h-[500px] shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
          >
            <motion.div 
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#432CF3] font-black text-8xl"
            >
              P
            </motion.div>
          </motion.div>

          {/* Lado Direito: Texto com Stagger */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-10"
          >
            {[
              { 
                title: "Integração Inteligente", 
                text: "Não vemos Branding e Martech como silos. Integramos ambos para que sua marca seja tão forte quanto sua performance." 
              },
              { 
                title: "Foco no ROI", 
                text: "Se não pode ser medido, não serve para o seu crescimento. Baseamos cada ação em dados concretos." 
              },
              { 
                title: "Compromisso Local", 
                text: "Somos de Pernambuco. Entendemos a cultura, os desafios e a força do mercado regional." 
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <h3 className="text-black font-bold text-[20px] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                    className="h-[2px] bg-black"
                  ></motion.span>
                  {item.title}
                </h3>
                <p className="text-[20px] md:text-[22px] leading-[1.5] text-gray-800">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}