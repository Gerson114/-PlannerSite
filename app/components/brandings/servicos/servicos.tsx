import { ArrowRight } from "lucide-react";

export default function Servicos() {
    return (
        <>
        <section className="flex justify-center mt-[40px] md:mt-[60px] px-4">
            <div className="max-w-[1400px] w-full">

                {/* Título Responsivo */}
                <div>
                    <h2 className="text-[32px] md:text-[50px] font-bold leading-[1.1]">
                        Conheça alguns dos <br />
                        <span className="text-[#4D35F4]">nossos serviços</span>
                    </h2>
                </div>

                {/* Grid Responsivo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mt-[30px] md:mt-[40px] items-center">

                    {/* Primeira Coluna: Imagem/Card */}
                    <div className="bg-[#F3F7FA] h-[300px] md:h-[400px] rounded-[30px] flex items-center justify-center border border-[#DADADA]">
                        <span className="text-gray-400">Conteúdo Visual</span>
                    </div>

                    {/* Segunda Coluna: Conteúdo */}
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-wrap gap-2 text-[14px] md:text-[18px] font-bold mb-4">
                            <div className="border border-black py-[4px] px-4 rounded-full">
                                <p>BRANDING</p>
                            </div>
                            <div className="border border-black py-[4px] px-4 rounded-full">
                                <p>SERVISHOPPING</p>
                            </div>
                        </div>

                        <h2 className="text-[30px] md:text-[40px] font-bold leading-[1.1]">
                            Marketing <br /> que impulsiona!
                        </h2>

                        <p className="text-[18px] md:text-[22px] mt-[20px] text-gray-700">
                            Criamos estratégias inteligentes para conectar marcas ao seu público, gerar engajamento e impulsionar resultados reais.
                        </p>

                        {/* Botões */}
                        <div className="flex flex-wrap items-center mt-[30px] gap-4">

                            {/* Botão da Seta: Fundo Branco, Borda Preta */}
                            <button className="bg-white text-black border-2 border-black p-3 rounded-[15px] hover:bg-black hover:text-white transition-all duration-300 group">
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Botão Saiba Mais */}
                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[15px] bg-[#432CF3] hover:bg-[#321ec4] transition-all duration-300">
                                Saiba mais sobre este projeto
                            </button>

                        </div>
                    </div>
                </div>



                <div className="grid mt-[100px]   grid-cols-2">
                    {/* Card da Esquerda */}
                    <div className="bg-[#F3F7FA] max-w-[400px] rounded-[15px] w-full h-[500px]">
                        <div className="flex justify-center mt-[25px] gap-8">
                            <div className="border-1 py-[8px] px-[15px] rounded-[10px]">BRANDING</div>
                            <div className="border-1 py-[8px] px-[15px] rounded-[10px]">SERVI SHOPPING</div>
                            
                        </div>
                    </div>

                    {/* Coluna da Direita */}
                    <div className="ml-[-200px] ">
                        {/* Card da Direita */}
                        <div className="bg-[#F3F7FA] h-[350px] rounded-[15px]">
                            <div className="flex justify-center mt-[0px] gap-8">
                                <div className="border-1 py-[8px] px-[15px] rounded-[10px]">BRANDING</div>
                                <div className="border-1 py-[8px] px-[15px] rounded-[10px]">SERVI SHOPPING</div>


                               
                            </div>

                            
                        </div>

                        {/* Texto abaixo do card */}
                        <div className="mt-6 flex gap-4 px-2">
                            <h3 className="text-[22px] leading-[1.1] font-bold text-gray-800">Clique ao lado para <br />
                             conhecer outros cases <br /> de nossos clientes.</h3>

                               <div className="flex flex-wrap items-center mt-[30px] gap-4">

                            {/* Botão da Seta: Fundo Branco, Borda Preta */}
                            <button className="bg-white text-black border-2 border-black p-3 rounded-[15px] hover:bg-black hover:text-white transition-all duration-300 group">
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Botão Saiba Mais */}
                            <button className="py-[14px] px-[24px] text-white font-semibold rounded-[15px] bg-[#0C1523] hover:bg-[#0C1523] transition-all duration-300">
                                Saiba mais sobre este projeto
                            </button>

                        </div>
                             
                             
                           
                        </div>
                    </div>
                </div>

               













            </div>
            
        </section>
        <hr className="w-full mt-[80px] mb-[80px] border-[#DADADA]  " />
        </>  

        
    );
}