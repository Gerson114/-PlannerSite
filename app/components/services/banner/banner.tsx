import Image from "next/image";
import img from "../../../../public/IMAGEM BANNER SITE PLANNER.webp"


export default function Banner() {
    return (
        <section className="flex justify-center w-full px-4">
            <div className="max-w-[1400px] w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="mt-10 md:mt-[80px] flex-1">
                        {/* Texto da tag: menor no mobile */}
                        <p className="text-[16px] md:text-[24px] border border-black inline-block py-2 md:py-[10px] px-6 md:px-[39px] rounded-[8px]">
                            Branding & Experiência Digital
                        </p>

                        <div className="mt-8 md:mt-[50px]">
                            {/* Título principal: Escalonado de 48px para 130px */}
                            <h1 className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[130px] leading-[1.1] md:leading-[1.0] font-extrabold">
                                Branding & <br className="hidden md:block" /> Experiência <br className="hidden md:block" /> Digital
                            </h1>
                            
                            {/* Subtítulo: Escalonado de 24px para 40px */}
                            <p className="mt-6 md:mt-[50px] font-medium text-[24px] md:text-[40px] leading-[1.1] md:leading-[1.0]">
                                A Fundação da Diferenciação <br className="hidden md:block" /> no Mercado
                            </p>
                        </div>
                    </div>

                    {/* Container da imagem: Ajustado para centralizar no mobile e alinhar à direita no desktop */}
                    <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-[50px] w-full max-w-[300px] md:max-w-[450px]">
                        <Image 
                            src={img} 
                            alt="Banner Planner" 
                            width={500} 
                            height={500}
                            className="w-full h-auto object-contain  pointer-events-none select-none"
                            priority
                        />
                    </div>

                </div>

                
                 
            </div>
        </section>
    );
}