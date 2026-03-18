export default function Form() {
  return (
    <>
      <form className="flex py-12 md:py-[100px] px-4 justify-center">
        <div className="max-w-[1400px] w-full">
          {/* Títulos principais adaptados */}
          <h2 className="text-3xl md:text-[50px] font-extrabold text-center leading-tight">
            Pronto para o próximo nível?
          </h2>
          <p className="text-base md:text-[19px] text-center mt-4 max-w-2xl mx-auto">
            O crescimento da sua empresa não precisa ser um enigma. Vamos construir juntos uma trajetória de sucesso baseada em dados, clareza e parceria.
          </p>

          {/* Container azul: flex-col no mobile, flex-row no desktop */}
          <div className="flex flex-col lg:flex-row mt-8 md:mt-[50px] gap-8 lg:gap-[150px] justify-center items-center bg-[#432CF3] rounded-[8px] p-8 md:p-[55px]">
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-[48px] leading-[1.1] text-white">
                Vamos levar sua marca <br className="hidden md:block" /> para um outro nível?
              </h3>
            </div>

            {/* Input e Botão */}
            <div className="flex flex-col md:flex-row w-full lg:w-auto md:border md:border-[#DADADA] md:rounded-[8px] overflow-hidden">
              <input
                className="p-[15px] bg-white text-black outline-none border md:border-none rounded-[8px] md:rounded-none w-full md:w-[250px]"
                type="email"
                placeholder="Insira seu email"
                required
              />

              <button className="bg-black hover:bg-gray-900 transition-colors text-white p-[15px] font-medium rounded-[8px] md:rounded-none w-full md:w-auto mt-3 md:mt-0 whitespace-nowrap">
                Me envie uma proposta
              </button>
            </div>

          </div>
        </div>
      </form>
    </>
  );
}