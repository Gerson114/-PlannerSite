"use client";
import Image from "next/image";
import img from "./../../../../public/HENRIQUE - QUEM SOMOS.webp";
import { motion, Variants } from "framer-motion";

export default function Existimos() {
  // Variantes para o texto e os números (stagger effect)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 1, 0.5, 1] as const 
      },
    },
  };

  return (
    <section className="flex justify-center mt-[50px] px-4">
      <div className="max-w-[1400px] w-full">
        
        {/* Título com animação de entrada lateral */}
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[50px] font-extrabold leading-[1.1] mb-8"
        >
          Por que existimos?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Coluna do Texto */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-[22px] leading-relaxed text-gray-800">
                Todo grande negócio em Pernambuco nasce de uma visão, mas sabemos que o caminho para o crescimento digital pode ser repleto de ruídos e jargões complexos. A Planner nasceu da percepção de que as Pequenas e Médias Empresas precisavam de algo mais do que apenas "marketing": elas precisavam de inteligência prática.
              </p>

              <p className="text-[22px] mt-6 leading-relaxed text-gray-800">
                Nossa história é pautada pela crença de que negócios são feitos por pessoas, e que transformações verdadeiras só acontecem quando a tecnologia (Martech) está a serviço de uma marca forte (Branding). Não entregamos apenas dados; entregamos clareza para que você possa tomar as melhores decisões para o seu futuro.
              </p>
            </motion.div>

            {/* INFO EXTRA: Os itens aqui também herdam o stagger */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-blue-600 font-bold text-2xl">2018</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Fundação</p>
              </div>
              <div>
                <p className="text-blue-600 font-bold text-2xl">+150</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Projetos</p>
              </div>
              <div>
                <p className="text-blue-600 font-bold text-2xl">Recife</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Base Operacional</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna da Imagem: Mantendo o mt-[-100px] e adicionando fade-in suave */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center mt-[-100px] md:justify-end"
          >
            <Image
              src={img}
              width={600}
              height={700}
              quality={100}
              alt="Henrique - Quem Somos"
              // Adicionando uma classe para suavizar o carregamento da imagem em si
              className="transition-opacity duration-500"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}