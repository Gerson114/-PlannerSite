export default function Marketing() {
  return (
    <>
      {/* overflow-x-clip evita que o enfeite azul crie barra de rolagem horizontal */}
      <div className="flex justify-center px-4 md:px-8 lg:px-10 overflow-x-clip">
        <div className="max-w-[1400px] w-full relative">
          
          {/* Enfeite Azul: Visível apenas a partir de telas LG (Notebooks) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[-50vw] left-[85%] h-[20%] bg-[#432CF3] rounded-l-[40px] z-0" />

          {/* Container Principal */}
          <div className="flex flex-col lg:flex-row items-center justify-between border border-gray-300 rounded-[30px] md:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 mt-[40px] md:mt-[60px] gap-10 bg-white relative z-10 shadow-sm">
            
            {/* Lado Esquerdo: Texto e Botões */}
            <div className="flex-1 w-full z-10">
              <h3 className="text-[38px] sm:text-[55px] md:text-[65px] lg:text-[80px] leading-[0.9] md:leading-[0.85] font-bold tracking-tighter text-slate-900">
                Marketing que
                <br /> 
                <span className="text-[#432CF3]"> impulsiona,</span> 
                <br /> 
                resultados que 
                <br />
                <span className="text-[#432CF3]">transformam!</span>
              </h3>

              {/* Container de Botões */}
              <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-12">
                {/* Botão Seta */}
                <button className="flex items-center justify-center rounded-2xl border border-gray-300 w-[55px] h-[55px] md:w-[60px] md:h-[60px] hover:bg-gray-50 transition-all active:scale-95 shadow-sm group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                {/* Botão Principal */}
                <button className="flex-1 sm:flex-none bg-[#432CF3] hover:bg-[#321fd1] text-white py-[16px] md:py-[18px] px-6 md:px-10 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95 text-sm md:text-lg">
                  Saiba mais sobre este projeto
                </button>
              </div>
            </div>

            {/* Lado Direito: Quadrado Visual */}
            <div className="w-full sm:w-[80%] md:w-[400px] lg:w-[400px] aspect-square bg-gray-50 rounded-[30px] md:rounded-[60px] flex-shrink-0 border border-gray-200 overflow-hidden relative shadow-sm z-20">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                 <span className="text-gray-300 text-xs md:text-sm font-bold tracking-widest uppercase opacity-50 text-center px-4">
                   Sua Imagem Aqui
                 </span>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}