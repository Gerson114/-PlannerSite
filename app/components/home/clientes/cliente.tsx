"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Cliente() {
    const logos = [
        { id: 1, name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { id: 2, name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { id: 3, name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { id: 4, name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
        { id: 5, name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { id: 6, name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    ];

    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="flex justify-center py-20 bg-white">
            <div className="max-w-[1400px] w-full px-6">

                <div className="text-center">
                    <h2 className="text-[35px] md:text-[48px] font-bold mb-6 tracking-tight text-slate-900">
                        Nossos Clientes
                    </h2>
                    <p className="text-[19px] mb-[50px] text-gray-600">
                        Ao longo de 15 anos de história, tivemos o privilégio de construir parcerias sólidas, desenvolvendo{" "}
                        <br className="hidden md:block" /> soluções que unem estratégia e tecnologia para superar desafios reais de mercado.
                    </p>
                </div>

                {/* Container do Carrossel */}
                <div className="relative flex overflow-hidden py-10">
                    {/* Degrade nas laterais */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-16 md:gap-24 items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {duplicatedLogos.map((logo, index) => (
                            <div key={`${logo.id}-${index}`} className="flex-shrink-0">
                                {/* Usando tag img para SVGs externos (O componente Image do Next.js requer width/height para layouts externos) */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.url}
                                    alt={`Logo ${logo.name}`}
                                    width={120}
                                    height={48}
                                    className="h-8 md:h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}