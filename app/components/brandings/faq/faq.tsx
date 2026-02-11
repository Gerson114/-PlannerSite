import { ChevronRight } from "lucide-react"; // 1. Trocamos o ícone

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
  const subtitulo = <>Dúvidas Frequentes <br /> sobre Branding <br /> e Design</>;

  return (
    <div className="flex justify-center">
      <div className="max-w-[1400px] w-full px-10">
        <div className="flex items-start justify-between gap-20">
          
          {/* LADO ESQUERDO */}
          <div className="sticky top-10">
            <h1 className="text-[300px] font-bold leading-none">{tituloGigante}</h1>
            <p className="text-[60px] mt-[-50px] leading-[1.1] font-medium">
              {subtitulo}
            </p>
          </div>

          {/* LADO DIREITO (ACCORDIONS) */}
          <div className="flex-1 mt-[12px] space-y-6 pb-20">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#F3F7FA] rounded-[20px] p-6 group cursor-pointer transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[24px] font-bold text-gray-800 pr-4">
                    {item.pergunta}
                  </h3>
                  
                  {/* Quadrado Preto com Seta - Ajustado para rotacionar 90 graus */}
                  <div className="bg-black w-[50px] h-[50px] flex items-center justify-center rounded-[12px] shrink-0 transition-transform duration-300 group-hover:rotate-90">
                    <ChevronRight className="text-white w-6 h-6" />
                  </div>
                </div>

                {/* Conteúdo que expande */}
                <div className="max-h-0 overflow-hidden transition-all duration-500 group-hover:max-h-40">
                  <p className="mt-6 text-gray-600 text-lg leading-relaxed border-t border-gray-200 pt-6">
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