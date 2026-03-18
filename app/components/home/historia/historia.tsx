"use client";
import { motion, Variants } from "framer-motion";

export default function Historia() {
  return (
    <section className="flex justify-center p-4 md:p-0">
        <div className="max-w-[1400px] w-full">
          {/* Grid: 1 coluna no mobile, 2 colunas no desktop */}
          <div className="bg-[#F3F7FA] leading-tight md:leading-[1.1] rounded-[8px] grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            
            {/* Texto: Ajuste de padding e tamanho de fonte para mobile */}
            <div className="p-6 md:p-[50px]">
              <h2 className="text-[32px] md:text-[48px] font-extrabold">
                15 anos <br className="hidden md:block" /> de história
              </h2>

              <p className="mt-[15px] text-[19px] md:text-[22px]">
                A Planner nasceu para preencher uma lacuna: a necessidade de empresas de todos os portes terem acesso a estratégias sofisticadas, porém práticas. Entendemos que muitos empresários se sentem perdidos em jargões técnicos e promessas sem retorno. Por isso, nossa entrega foca no que importa: ROI, clareza e parceria.
              </p>
            </div>

            {/* Lado Direito: Apenas visível em telas Médias (md) para cima */}
            <div className="hidden md:flex justify-center">
              <div className="max-w-[200px] w-full">
                <div className="bg-[#432CF3] h-full">
                  {/* Conteúdo da barra roxa */}
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}