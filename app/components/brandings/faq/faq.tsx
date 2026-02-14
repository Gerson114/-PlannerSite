import { ChevronRight } from "lucide-react";

export default function Faq() {
  const faqData = [
    {
      pergunta: "Quanto tempo leva um projeto de Branding?",
      resposta: "Nossa metodologia é focada em resultados estratégicos, garantindo que cada etapa entregue valor real para o seu negócio."
    },
    {
      pergunta: "Qual a diferença entre Logo e Identidade Visual?",
      resposta: "Logo é apenas o símbolo. Identidade Visual é o ecossistema completo: cores, fontes e estilo que comunicam sua essência."
    },
    {
      pergunta: "Como funciona o processo de criação?",
      resposta: "Passamos por imersão, estratégia, design e entrega, sempre com validações constantes para garantir o alinhamento."
    },
    {
      pergunta: "Vocês fazem apenas o registro da marca?",
      resposta: "Nosso foco é o design estratégico, mas orientamos e indicamos parceiros jurídicos para o registro oficial."
    },
  ];

  const tituloGigante = "FAQ";
  const subtitulo = <>Dúvidas Frequentes <br className="hidden md:block" /> sobre Branding <br className="hidden md:block" /> e Design</>;

  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div className="max-w-[1400px] w-full px-6 md:px-10 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-20">
          
          {/* LADO ESQUERDO - Títulos */}
          <div className="lg:sticky lg:top-10 w-full lg:w-auto text-center lg:text-left">
            {/* FAQ Gigante: Escondido em telas pequenas, visível em telas grandes */}
            <h1 className="hidden lg:block text-[150px] xl:text-[300px] font-bold leading-none select-none opacity-10 lg:opacity-100">
              {tituloGigante}
            </h1>
            
            {/* Subtítulo: Ajustado para mobile */}
            <p className="text-[32px] md:text-[45px] lg:text-[60px] lg:mt-[-50px] leading-[1.1] font-medium text-black">
              {subtitulo}
            </p>
          </div>

          {/* LADO DIREITO (ACCORDIONS) */}
          <div className="flex-1 w-full space-y-4 md:space-y-6 pb-10 md:pb-20">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F3F7FA] rounded-[20px] p-5 md:p-6 group cursor-pointer transition-all duration-300 hover:shadow-md"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-[18px] md:text-[24px] font-bold text-gray-800 leading-tight">
                    {item.pergunta}
                  </h3>
                  
                  {/* Quadrado Preto com Seta */}
                  <div className="bg-black w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-[12px] shrink-0 transition-transform duration-300 group-hover:rotate-90">
                    <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>

                {/* Conteúdo que expande */}
                <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-[300px] md:group-hover:max-h-40">
                  <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed border-t border-gray-200 pt-4 md:pt-6">
                    {item.resposta}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}