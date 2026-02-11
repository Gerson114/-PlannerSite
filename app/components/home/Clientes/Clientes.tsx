"use client";
import { motion } from "framer-motion";

export default function Cliente() {
  // Lista de logos (adicione os caminhos das suas imagens aqui)
  const logos = [
    { id: 1, name: "Empresa 1", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 2, name: "Empresa 2", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { id: 3, name: "Empresa 3", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 4, name: "Empresa 4", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
    { id: 5, name: "Empresa 5", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { id: 6, name: "Empresa 6", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  ];

  // Duplicamos a lista para criar o efeito de loop infinito sem buracos
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="flex justify-center py-20 bg-white">
      <div className="max-w-[1400px] w-full px-6">
        
        <h3 className="text-[35px] md:text-[50px] font-bold mb-12 tracking-tight text-slate-900">
          Nossos Clientes
        </h3>

        {/* Container do Carrossel */}
        <div className="relative flex overflow-hidden py-10">
          {/* Efeito de desfoque nas laterais para suavizar a entrada/saída */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex gap-16 md:gap-24 items-center"
            animate={{
              x: ["0%", "-50%"], // Move metade da largura (a lista original)
            }}
            transition={{
              duration: 20, // Velocidade (quanto maior, mais lento)
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 md:h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}