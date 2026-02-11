export default function Banner() {
    return (
        <div className="w-full bg-white overflow-x-hidden">
            {/* --- LAYOUT MOBILE (Abaixo de 768px) --- */}
            <div className="flex md:hidden flex-col px-4 py-8 space-y-4">
                {/* Badge de Serviço Mobile */}
                <div className="inline-block self-start border border-zinc-300 px-6 py-2 rounded-full bg-white">
                    <h3 className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">
                        Serviços: Branding & Design
                    </h3>
                </div>

                {/* Card de Conteúdo Mobile */}
                <div className="bg-[#432CF3] rounded-[30px] p-8 h-[400px] flex flex-col justify-end">
                    <h2 className="text-white font-black text-[55px] leading-[0.8] tracking-tighter">
                        Branding <br /> & Design
                    </h2>
                </div>
            </div>

            {/* --- LAYOUT DESKTOP (768px ou mais) --- */}
            <div className="hidden md:flex justify-center w-full px-6 py-20">
                <div className="w-full max-w-[1400px] relative">
                    
                    {/* Badge de Serviço Desktop */}
                    <div className="absolute top-0 left-0 w-[50%] h-[16%] flex items-center justify-start z-20">
                        <div className="border border-zinc-300 px-[130px] py-[15px] rounded-[30px]">
                            <h3 className="text-zinc-500 font-medium text-sm lg:text-[19px] uppercase tracking-widest whitespace-nowrap">
                                Serviços: Branding & Design
                            </h3>
                        </div>
                    </div>

                    {/* SVG MASK para Desktop */}
                    <svg width="0" height="0" className="absolute">
                        <defs>
                            <clipPath id="bannerClipDesktop" clipPathUnits="objectBoundingBox">
                                <path d="M 0.48,0 
                                         L 0.97,0 Q 1,0 1,0.05 
                                         L 1,0.95 Q 1,1 0.97,1 
                                         L 0,1 
                                         L 0,0.22 Q 0,0.17 0.03,0.17 
                                         L 0.43,0.17 Q 0.46,0.17 0.46,0.12 
                                         L 0.46,0.05 Q 0.46,0 0.48,0 Z" />
                            </clipPath>
                        </defs>
                    </svg>

                    {/* Banner Azul Desktop */}
                    <div
                        className="bg-blue-900 h-[600px] text-white relative z-10 flex flex-col justify-end overflow-hidden"
                        style={{ clipPath: "url(#bannerClipDesktop)" }}
                    >
                        <h2 className="font-bold tracking-tighter leading-[0.85] text-[100px] lg:text-[150px] -ml-4 -mb-2">
                            Branding <br /> <span className="font-light">& Design</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}