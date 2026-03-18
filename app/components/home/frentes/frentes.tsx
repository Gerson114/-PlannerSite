"use client";
import { ArrowRight } from "lucide-react";

export default function Frente() {
  return (
    <section className="flex justify-center py-10 md:py-20 bg-white font-sans text-black">
      <div className="max-w-[1400px] w-full px-4 md:px-10">
        
        {/* Linha Divisória Superior */}
        <hr className="w-full border-[#DADADA] mb-8 md:mb-12" />

        {/* Título da Seção */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] font-extrabold  leading-tight px-2">
            Nossas frentes de trabalho
          </h2>
          <p className="text-[16px] md:text-[19px] mt-1 text-gray-500 max-w-[850px] mx-auto leading-snug px-4">
            Simplificamos a complexidade para potencializar o seu crescimento. Na Planner, unimos estratégia de marca e tecnologia para transformar o seu potencial em resultados reais e mensuráveis.
          </p>
        </div>

        {/* Grid Responsivo: 
            1 coluna no mobile (default)
            2 colunas em tablets (md)
            4 colunas em desktops (lg) 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[30px]">
          
          {/* Card 1 */}
          <div className="border border-[#DADADA] p-6 md:p-[25px] rounded-[8px] flex flex-col h-full hover:border-black transition-all duration-300 group">
            <div className="bg-amber-100 h-[180px] md:h-[200px] rounded-[4px] flex items-center justify-center">
              <span className="text-amber-800 font-bold text-3xl opacity-20 italic">F</span>
            </div>
            <h3 className="font-extrabold text-[28px] md:text-[32px] mt-[25px] leading-[1.1] whitespace-pre-line">
              Branding &{"\n"}Experiência{"\n"}Digital
            </h3>
            <div className="mt-auto pt-8 flex gap-3">
              <button className="border border-black bg-white text-black min-w-[40px] w-10 h-10 flex items-center justify-center rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group/btn">
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button className="bg-black text-white flex-1 flex items-center justify-center rounded-[8px] font-bold text-[12px] md:text-[14px] uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors py-3 md:py-0">
                Saiba mais
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#DADADA] p-6 md:p-[25px] rounded-[8px] flex flex-col h-full hover:border-black transition-all duration-300 group">
            <div className="bg-amber-100 h-[180px] md:h-[200px] rounded-[4px] flex items-center justify-center">
              <span className="text-amber-800 font-bold text-3xl opacity-20 italic">F</span>
            </div>
            <h3 className="font-extrabold text-[28px] md:text-[32px] mt-[25px] leading-[1.1] whitespace-pre-line">
              Estratégia &{"\n"}Performance{"\n"}de Vendas
            </h3>
            <div className="mt-auto pt-8 flex gap-3">
              <button className="border border-black bg-white text-black min-w-[40px] w-10 h-10 flex items-center justify-center rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group/btn">
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button className="bg-black text-white flex-1 flex items-center justify-center rounded-[8px] font-bold text-[12px] md:text-[14px] uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors py-3 md:py-0">
                Saiba mais
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-[#DADADA] p-6 md:p-[25px] rounded-[8px] flex flex-col h-full hover:border-black transition-all duration-300 group">
            <div className="bg-amber-100 h-[180px] md:h-[200px] rounded-[4px] flex items-center justify-center">
              <span className="text-amber-800 font-bold text-3xl opacity-20 italic">F</span>
            </div>
            <h3 className="font-extrabold text-[28px] md:text-[32px] mt-[25px] leading-[1.1] whitespace-pre-line">
              Criação &{"\n"}Design de{"\n"}Produto
            </h3>
            <div className="mt-auto pt-8 flex gap-3">
              <button className="border border-black bg-white text-black min-w-[40px] w-10 h-10 flex items-center justify-center rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group/btn">
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button className="bg-black text-white flex-1 flex items-center justify-center rounded-[8px] font-bold text-[12px] md:text-[14px] uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors py-3 md:py-0">
                Saiba mais
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-[#DADADA] p-6 md:p-[25px] rounded-[8px] flex flex-col h-full hover:border-black transition-all duration-300 group">
            <div className="bg-amber-100 h-[180px] md:h-[200px] rounded-[4px] flex items-center justify-center">
              <span className="text-amber-800 font-bold text-3xl opacity-20 italic">F</span>
            </div>
            <h3 className="font-extrabold text-[28px] md:text-[32px] mt-[25px] leading-[1.1] whitespace-pre-line">
              Tecnologia &{"\n"}Desenvolvimento{"\n"}Web
            </h3>
            <div className="mt-auto pt-8 flex gap-3">
              <button className="border border-black bg-white text-black min-w-[40px] w-10 h-10 flex items-center justify-center rounded-[8px] hover:bg-black hover:text-white transition-all duration-300 group/btn">
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button className="bg-black text-white flex-1 flex items-center justify-center rounded-[8px] font-bold text-[12px] md:text-[14px] uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors py-3 md:py-0">
                Saiba mais
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}