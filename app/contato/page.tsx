import Faq from "../components/brandings/faq/faq";

export default function Contato() {
    return (
        <>
            <div className="flex justify-center mt-[60px] md:mt-[100px] mb-[60px] md:mb-[100px]">
                <div className="max-w-[1400px] w-full px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[80px]">

                        {/* Coluna do Título e Infos */}
                        <div className="flex flex-col justify-start text-center md:text-left items-center md:items-start">
                            <h2 className="text-[32px] md:text-[50px] font-bold leading-[1.1] text-black">
                                Vamos planejar o seu próximo ciclo de crescimento?
                            </h2>

                            <p className="text-[18px] md:text-[22px] mt-[20px] leading-[1.2] md:leading-[1.1] text-gray-700">
                                Seja para tirar uma dúvida técnica ou solicitar um diagnóstico estratégico, nossa equipe de especialistas está pronta para ouvir você.
                            </p>

                            <hr className="w-full border-[#DADADA] my-[30px] md:my-[40px]" />

                            {/* Container de Contatos (Email e Whats) */}
                            <div className="flex flex-col gap-6 md:gap-8 w-full">

                                {/* Bloco Email */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                    <div className="flex items-center justify-center min-w-[60px] h-[60px] border-2 border-black rounded-[12px] text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-[#432CF2] text-[20px] md:text-[22px] font-bold leading-none">Nosso Email</p>
                                        <p className="text-gray-800 text-[18px] md:text-[20px] font-bold mt-1 break-all">contato@agenciaplanner.com.br</p>
                                    </div>
                                </div>

                                {/* Bloco Whatsapp */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                    <div className="flex items-center justify-center min-w-[60px] h-[60px] border-2 border-black rounded-[12px] text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <p className="text-[#432CF2] text-[20px] md:text-[22px] font-bold leading-none">Nosso Whatsapp</p>
                                        <p className="text-gray-800 text-[18px] md:text-[20px] font-bold mt-1">(11) 99999-9999</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="w-full border-[#DADADA] my-[30px] md:my-[40px]" />

                            <p className="font-bold text-[32px] md:text-[50px] text-black">Segue a gente</p>
                            <div className="flex gap-4 mt-6">
                                {[
                                    { id: 'insta', path: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></>, viewBox: "0 0 24 24", type: "stroke" },
                                    { id: 'fb', path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>, viewBox: "0 0 24 24", type: "stroke" },
                                    { id: 'x', path: <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 310.9 112 464H32L183.4 275.9 32 48h145L256 174 389.2 48zM364.5 421.8h39.6L130.4 91.8H89.2L364.5 421.8z" />, viewBox: "0 0 512 512", type: "fill" }
                                ].map((social) => (
                                    <a key={social.id} href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[60px] h-[60px] border-2 border-black rounded-[12px] text-black hover:bg-black hover:text-white transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox={social.viewBox} fill={social.type === 'fill' ? "currentColor" : "none"} stroke={social.type === 'stroke' ? "currentColor" : "none"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {social.path}
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Coluna do Formulário */}
                        <div className="w-full">
                            <div className="bg-[#432CF3] p-[30px] md:p-[60px] rounded-[20px] shadow-xl">
                                <form action="" className="flex flex-col gap-[15px] md:gap-[20px]">
                                    {[
                                        { label: "Nome Completo", type: "text" },
                                        { label: "Nome da Empresa", type: "text" },
                                        { label: "E-mail Corporativo", type: "email" },
                                        { label: "Whatsapp", type: "text" }
                                    ].map((field, idx) => (
                                        <div key={idx} className="flex flex-col text-[17px] md:text-[19px] text-white">
                                            <label className="mb-[6px] md:mb-[8px] font-medium">{field.label}</label>
                                            <input className="bg-white py-[10px] md:py-[12px] px-[15px] rounded-[10px] text-black outline-none w-full" type={field.type} />
                                        </div>
                                    ))}
                                    
                                    <div className="flex flex-col text-[17px] md:text-[19px] text-white">
                                        <label className="mb-[6px] md:mb-[8px] font-medium">Em que podemos ajudar?</label>
                                        <textarea className="bg-white h-[120px] md:h-[150px] rounded-[10px] text-black p-[15px] outline-none resize-none w-full" id="textarea"></textarea>
                                    </div>

                                    <div className="flex flex-col gap-[12px] md:gap-[16px] mt-[10px]">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" className="min-w-[18px] h-[18px] md:min-w-[20px] md:h-[20px] mt-[4px] rounded border-none accent-black cursor-pointer shrink-0" />
                                            <span className="text-white text-[14px] md:text-[15px] leading-tight">
                                                Ao informar meus dados, eu concordo com a <strong>Política de Privacidade</strong>.
                                            </span>
                                        </label>
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" className="min-w-[18px] h-[18px] md:min-w-[20px] md:h-[20px] mt-[4px] rounded border-none accent-black cursor-pointer shrink-0" />
                                            <span className="text-white text-[14px] md:text-[15px] leading-tight">
                                                Gostaria de receber nossos e-mails personalizados com estratégias e materiais.
                                            </span>
                                        </label>
                                    </div>

                                    <button className="mt-[10px] md:mt-[20px] bg-black text-white py-[12px] md:py-[15px] rounded-[10px] font-bold text-[16px] md:text-[18px] hover:bg-[#1a1a1a] transition-colors w-full">
                                        Enviar Mensagem
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 

            <hr className="w-full border-[#DADADA]" />

            <div className="px-4">
                <Faq />
            </div>
        </>
    );
}