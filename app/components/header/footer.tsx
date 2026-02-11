import Image from "next/image"
import Logo from "./../../../public/LOGO PLANNER.webp"
import { Instagram, Facebook, Linkedin } from "lucide-react" // Certifique-se de instalar: npm install lucide-react

export default function Footer() {
    return (
        <>
        <hr className="w-full border-[#DADADA]  " />
        <footer className="flex justify-center bg-white py-12">
            
            <div className="max-w-[1400px] w-full px-6">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-8 text-black">

                    {/* Logo */}
                    <div className="flex flex-col items-start">
                        <Image src={Logo} alt="Logo" width={180} height={130} className="brightness-0 " />
                        <p className="mt-6 text-sm opacity-70 leading-relaxed">
                            Transformando ideias em resultados digitais de alto impacto.
                        </p>
                    </div>

                    {/* Empresa */}
                    <div>
                        <p className="text-[20px] font-bold mb-6">Empresa</p>
                        <div className="flex flex-col gap-4 text-[15px] opacity-80">
                            <a href="#" className="hover:opacity-100 transition-opacity">Quem somos</a>
                            <a href="#" className="hover:opacity-100 transition-opacity">Serviços</a>
                            <a href="#" className="hover:opacity-100 transition-opacity">Portifólio</a>
                            <a href="#" className="hover:opacity-100 transition-opacity">Trabalhe Conosco</a>
                            <a href="#" className="hover:opacity-100 transition-opacity">Contato</a>
                        </div>
                    </div>

                    {/* Serviços */}
                    <div>
                        <p className="text-[20px] font-bold mb-6">Serviços</p>
                        <div className="flex flex-col gap-4 text-[15px] opacity-80">
                            <a href="#" className="hover:opacity-100 transition-opacity">Branding & Design</a>
                            <a href="#" className="hover:opacity-100 transition-opacity">Criação & Desenvolvimento</a>
                            <a href="#" className="hover:opacity-100 transition-opacity">Tráfego Pago</a>
                            <a href="#" className="hover:opacity-100 transition-opacity">Servidor & Hospedagem</a>
                        </div>
                    </div>

                    {/* Conecte-se */}
                    {/* Conecte-se */}
                    <div>
                        <p className="text-[20px] font-bold mb-6">Conecte-se</p>
                        <div className="flex gap-4">
                            {/* Ícone Instagram */}
                            <a href="#" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/30 hover:bg-white hover:text-[#432CF3] transition-all duration-300">
                                <Instagram size={30} strokeWidth={1.5} />
                            </a>

                            {/* Ícone Facebook */}
                            <a href="#" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/30 hover:bg-white hover:text-[#432CF3] transition-all duration-300">
                                <Facebook size={30} strokeWidth={1.5} />
                            </a>

                            {/* Ícone Linkedin */}
                            <a href="#" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/30 hover:bg-white hover:text-[#432CF3] transition-all duration-300">
                                <Linkedin size={30} strokeWidth={1.5} />
                            </a>
                        </div>
                        <p className="mt-8 text-sm opacity-60">
                            Siga-nos para acompanhar <br /> nossas novidades.
                        </p>
                    </div>

                </div>

                {/* Linha de Copyright opcional para fechar com chave de ouro */}
                <div id="footer-copyright" className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/40">
                    © 2024 Planner Marketing. Todos os direitos reservados.
                </div>
            </div>
        </footer>
        
         </>
    )
}