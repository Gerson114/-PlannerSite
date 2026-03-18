"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Banner() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Seção do Título Principal */}
      <header className="flex justify-center mt-[40px] md:mt-[60px] lg:mt-[100px] px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px] w-full"
        >
          <h1 className="text-[38px] font-bold text-center md:text-[80px] lg:text-[72px] leading-[1] md:leading-[1.1] tracking-tighter">
            Estratégia e <br className="md:hidden" /> tecnologia para <br /> quem não aceita <br /> resultados simples
          </h1>
        </motion.div>
      </header>

      <div className="flex justify-center px-6">
        <div className="max-w-[1400px] text-center mt-[20px] md:mt-[29px] w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[18px] md:text-[22px] max-w-[800px] mx-auto leading-snug">
              Simplificamos o marketing digital para transformar o potencial da sua marca 
              <br className="hidden md:block" /> em crescimento real, mensurável e escalável.
            </p>
          </motion.div>

          <form action="" className="w-full flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center mt-[40px] md:mt-[80px] w-full max-w-[500px] md:max-w-none">
              
              {/* No Desktop (md), o grupo tem a borda cinza. No Mobile, a borda é individual. */}
              <div className="flex flex-col md:flex-row w-full md:w-auto md:border md:border-[#DADADA] md:rounded-[8px] overflow-hidden">
                
                <input 
                  className="p-[15px] outline-none border border-[#DADADA] md:border-none rounded-[8px] md:rounded-none w-full md:w-[200px] text-black" 
                  type="email" 
                  placeholder="Insira seu email" 
                  required
                />
                
                <button className="bg-[#432CF3] hover:bg-[#3221b5] transition-colors text-white p-[15px] font-medium rounded-[8px] md:rounded-none w-full md:w-auto mt-3 md:mt-0">
                  Me envie uma proposta
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}