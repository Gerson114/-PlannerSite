import Image from "next/image"
import Logo from "./../../../public/LOGO PLANNER.webp"
import { Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex justify-center bg-white py-12 border-t border-[#DADADA]">
            
            <div className="max-w-[1400px] w-full px-6">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 p-8 text-black">

                    {/* Logo */}
                    <div className="flex flex-col items-start">
                        <Image src={Logo} alt="Logo Agência Planner" width={180} height={130} className="brightness-0" />
                        <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                            Transformando ideias em resultados digitais de alto impacto.
                        </p>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-[20px] font-bold mb-6">Empresa</h3>
                        <div className="flex flex-col gap-4 text-[15px] text-gray-600">
                            <Link href="/pages/Quem-Somos" className="hover:text-black transition-colors">Quem somos</Link>
                            <Link href="/pages/brandings" className="hover:text-black transition-colors">Serviços</Link>
                            <Link href="/pages/cases" className="hover:text-black transition-colors">Portfólio</Link>
                            <Link href="#" className="hover:text-black transition-colors">Trabalhe Conosco</Link>
                            <Link href="/pages/contato" className="hover:text-black transition-colors">Contato</Link>
                        </div>
                    </div>

                    {/* Serviços */}
                    <div>
                        <h3 className="text-[20px] font-bold mb-6">Serviços</h3>
                        <div className="flex flex-col gap-4 text-[15px] text-gray-600">
                            <Link href="/pages/brandings" className="hover:text-black transition-colors">Branding &amp; Design</Link>
                            <Link href="/pages/desenvolvimento" className="hover:text-black transition-colors">Criação &amp; Desenvolvimento</Link>
                            <Link href="/pages/branding" className="hover:text-black transition-colors">Tráfego Pago</Link>
                            <Link href="/pages/desenvolvimento" className="hover:text-black transition-colors">Servidor &amp; Hospedagem</Link>
                        </div>
                    </div>

                    {/* Conecte-se */}
                    <div>
                        <h3 className="text-[20px] font-bold mb-6">Conecte-se</h3>
                        <div className="flex gap-4">
                            <Link href="#" aria-label="Instagram da Agência Planner" className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 hover:bg-[#432CF3] hover:text-white hover:border-[#432CF3] transition-all duration-300">
                                <Instagram size={22} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" aria-label="Facebook da Agência Planner" className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 hover:bg-[#432CF3] hover:text-white hover:border-[#432CF3] transition-all duration-300">
                                <Facebook size={22} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" aria-label="LinkedIn da Agência Planner" className="flex items-center justify-center w-11 h-11 rounded-xl border border-gray-200 hover:bg-[#432CF3] hover:text-white hover:border-[#432CF3] transition-all duration-300">
                                <Linkedin size={22} strokeWidth={1.5} />
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-gray-500">
                            Siga-nos para acompanhar <br /> nossas novidades.
                        </p>
                    </div>

                </div>

                <div id="footer-copyright" className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Planner Marketing. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}