"use client";
import { motion, Variants } from "framer-motion";

export default function Negocios() {
  // Configuração para os itens aparecerem um após o outro
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      <div className="flex justify-center mt-[100px]">
        <motion.div 
          className="max-w-[1400px] w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Título */}
          <motion.h2 
            variants={itemVariants}
            className="text-[50px] leading-[1.1] font-bold"
          >
            Negócios são feitos <br /> por pessoas. Pessoas <br />
            transformam negócios.
          </motion.h2>

          {/* Parágrafo 1 */}
          <motion.p 
            variants={itemVariants}
            className="text-[22px] mt-[50px]"
          >
            A Planner nasceu de uma lacuna clara no mercado de Pernambuco: a
            necessidade de PMEs terem acesso a uma estratégia que fosse, ao mesmo
            tempo, sofisticada e prática. Percebemos que muitos empresários se
            sentiam perdidos em meio a jargões técnicos e promessas de "mágica"
            digital que nunca se traduziam em ROI.
          </motion.p>

          {/* Parágrafo 2 */}
          <motion.p 
            variants={itemVariants}
            className="text-[22px] mt-[50px]"
          >
            Decidimos ser a voz da clareza. Como o Sábio que guia, assumimos o
            compromisso de educar e capacitar nossos parceiros. Não entregamos
            apenas serviços; entregamos uma jornada lógica onde transformações
            geram resultados, e resultados levam ao sucesso. Porque acreditamos
            que, ao final de cada meta batida, existe algo mais valioso: A cada
            sucesso, um sorriso.
          </motion.p>
        </motion.div>
      </div>

      {/* Linha Divisória com animação de largura */}
      <div className="flex justify-center">
        <motion.hr 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="max-w-[1400px] w-full border-[#DADADA] my-[100px]" 
        />
      </div>
    </>
  );
}