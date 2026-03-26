import { Search } from "lucide-react";

export default function Filtro() {
  return (
    <div className="w-full px-10 py-8 flex justify-center">
      {/* O container agora tem a borda, o arredondamento e o controle de foco */}
      <div className="relative w-full max-w-[400px] flex items-center border border-gray-300 rounded-full bg-white px-2 py-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
        
        {/* Input sem bordas próprias para não conflitar com a div */}
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full py-2 pl-4 pr-2 text-gray-700 bg-transparent outline-none"
        />
        
        {/* Botão com a lupa dentro */}
        <button 
          className="flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
          aria-label="Buscar"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}