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
                        <Image src={Logo} alt="Logo" width={180} height={130} className="brightness-0 " />
                        <p className="mt-6 text-sm opacity-70 leading-relaxed">
                            Transformando ideias em resultados digitais de alto impacto.
                        </p>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-[20px] font-bold mb-6">Empresa</h3>
                        <div className="flex flex-col gap-4 text-[15px] opacity-80">
                            <Link href="/Quem-Somos" className="hover:opacity-100 transition-opacity">Quem somos</Link>
                            <Link href="/branding" className="hover:opacity-100 transition-opacity">Serviços</Link>
                            <Link href="/cases" className="hover:opacity-100 transition-opacity">Portifólio</Link>
                            <Link href="#" className="hover:opacity-100 transition-opacity">Trabalhe Conosco</Link>
                            <Link href="/contato" className="hover:opacity-100 transition-opacity">Contato</Link>
                        </div>
                    </div>

                    {/* Serviços */}
                    <div>
                        <h3 className="text-[20px] font-bold mb-6">Serviços</h3>
                        <div className="flex flex-col gap-4 text-[15px] opacity-80">
                            <Link href="/branding" className="hover:opacity-100 transition-opacity">Branding & Design</Link>
                            <Link href="/branding" className="hover:opacity-100 transition-opacity">Criação & Desenvolvimento</Link>
                            <Link href="/branding" className="hover:opacity-100 transition-opacity">Tráfego Pago</Link>
                            <Link href="/branding" className="hover:opacity-100 transition-opacity">Servidor & Hospedagem</Link>
                        </div>
                    </div>

                    {/* Conecte-se */}
                    <div>
                        <h3 className="text-[20px] font-bold mb-6">Conecte-se</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/30 hover:bg-white hover:text-[#432CF3] transition-all duration-300">
                                <Instagram size={30} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/30 hover:bg-white hover:text-[#432CF3] transition-all duration-300">
                                <Facebook size={30} strokeWidth={1.5} />
                            </Link>
                            <Link href="#" className="flex items-center justify-center w-11 h-11 rounded-xl border border-white/30 hover:bg-white hover:text-[#432CF3] transition-all duration-300">
                                <Linkedin size={30} strokeWidth={1.5} />
                            </Link>
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
    )
}