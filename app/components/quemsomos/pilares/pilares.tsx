"use client";
import { motion, Variants } from "framer-motion";

export default function Pilares() {
  // Configuração para os cards aparecerem em sequência (stagger)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  return (
    <>
      <div className="grid justify-center mb-[100px]">
        <div className="max-w-[1400px] w-full">
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[50px] mb-[25px] font-bold"
          >
            Nossos Pilares
          </motion.h2>

          {/* Grid de Pilares */}
          <motion.div 
            className="grid grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="border-1 boder-[#DADADA] p-[30px] rounded-[8px]">
              <h3 className="text-[40px] font-bold">Missão</h3>
              <p className="text-[22px]">Simplificar o marketing digital e potencializar o crescimento de PMEs em Pernambuco através de estratégia e tecnologia.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="border-1 boder-[#DADADA] p-[30px] rounded-[8px]">
              <h3 className="text-[40px] font-bold">Visão</h3>
              <p className="text-[22px]">Ser a agência referência no estado, reconhecida por transformar potencial em crescimento real e comprovado.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="border-1 boder-[#DADADA] p-[30px] rounded-[8px]">
              <h3 className="text-[40px] font-bold">Valores</h3>
              <p className="text-[22px]">Foco no Resultado, Parceria Transparente, Inteligência Prática, Adaptação Contínua e Compromisso Local.</p>
            </motion.div>
          </motion.div>

          {/* HR com fechamento automático correto para evitar erro de build */}
          <motion.hr 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full border-[#DADADA] mt-[70px] mb-[100px]" 
          />

          {/* CTA Final */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <h3 className="text-[50px] font-bold text-center">Pronto para o próximo nível?</h3>
            <p className="text-[22px] text-center">
              O crescimento da sua empresa não precisa ser um enigma. Vamos construir juntos uma trajetória de sucesso baseada em dados, clareza e parceria.
            </p>
          </motion.div> 
        </div>
      </div>
    </>
  );
}