export default function Fazemos() {
  return (
    <section className="flex justify-center px-4 py-8 lg:py-16">
      <div className="max-w-[1400px] w-full">
        {/* Ajuste de Padding: p-6 no mobile, p-12 no tablet e p-20 no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center border border-gray-300 rounded-[24px] p-6 md:p-12 lg:p-20">
          
          {/* Container da Imagem */}
          {/* Adicionada classe 'h-full' e ajustes de min-h para manter proporção */}
          <div className="bg-gray-200 rounded-xl min-h-[250px] sm:min-h-[350px] lg:min-h-[450px] w-full flex items-center justify-center overflow-hidden">
            <span className="text-gray-500 font-medium px-4 text-center">
              {/* Se for usar uma <img> real, adicione w-full h-full object-cover */}
              Espaço para Imagem
            </span>
          </div>

          {/* Conteúdo de Texto */}
          <div className="flex flex-col justify-center">
            {/* Tipografia responsiva: 28px -> 36px -> 48px */}
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight mb-4 font-bold text-gray-900">
              O que fazemos?
            </h2>

            {/* Linha decorativa: menor no mobile para não ocupar muito espaço vertical */}
            <hr className="w-16 lg:w-32 border-t-4 border-black mb-6 lg:mb-8" />

            <ul className="space-y-4 lg:space-y-6">
              <li className="text-[16px] md:text-[18px] lg:text-[22px] text-gray-700 leading-relaxed">
                <strong className="text-black">Identidade Visual:</strong> Logo, paleta de cores, tipografia.
              </li>
              <li className="text-[16px] md:text-[18px] lg:text-[22px] text-gray-700 leading-relaxed">
                <strong className="text-black">Posicionamento de Marca:</strong> Voz da marca, arquétipos e tom de voz.
              </li>
              <li className="text-[16px] md:text-[18px] lg:text-[22px] text-gray-700 leading-relaxed">
                <strong className="text-black">Design de Interface (UI/UX):</strong> Focando na experiência do usuário em produtos digitais.
              </li>
              <li className="text-[16px] md:text-[18px] lg:text-[22px] text-gray-700 leading-relaxed">
                <strong className="text-black">Materiais Institucionais:</strong> PDV, apresentações e papelaria.
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}