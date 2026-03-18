'use client'
import { useState, JSX } from 'react';

// 1. Definimos o contrato do que é um Projeto
interface Projeto {
    id: number;
    titulo: string;
    categoria: string;
    img: string;
}

export default function Imagens() {
    const [filtroAtivo, setFiltroAtivo] = useState('Todos');
    const [limite, setLimite] = useState(6);

    const categorias = ['Todos', 'Branding & Design', 'Publicidade Digital', 'Atendimento e IA'];

    // 2. Tipamos o array original
    const todosProjetos: Projeto[] = [
        { id: 1, titulo: 'Neo Blindados', categoria: 'Criação & Desenvolvimento', img: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=1631' },
        { id: 2, titulo: 'Projeto Alpha', categoria: 'Branding & Design', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470' },
        { id: 3, titulo: 'Projeto Beta', categoria: 'Publicidade Digital', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470' },
        { id: 4, titulo: 'Destaque Horizontal', categoria: 'Criação & Desenvolvimento', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470' },
        { id: 5, titulo: 'Industrial Loft', categoria: 'Criação & Desenvolvimento', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1470' },
        { id: 6, titulo: 'Segurança Máxima', categoria: 'Branding & Design', img: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1470' },
        { id: 7, titulo: 'Corporate Tower', categoria: 'Branding & Design', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470' },
        { id: 8, titulo: 'Villa Moderna', categoria: 'Criação & Desenvolvimento', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1470' },
        { id: 9, titulo: 'Skyline Office', categoria: 'Publicidade Digital', img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1470' },
        { id: 10, titulo: 'Interior Design', categoria: 'Atendimento e IA', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1470' },
        { id: 11, titulo: 'Residência G6', categoria: 'Atendimento e IA, ', img:  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1470' },
        { id: 12, titulo: 'Bunker Premium', categoria: 'Atendimento e IA', img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1470' },
    ];

    const baseFiltrada = filtroAtivo === 'Todos'
        ? todosProjetos
        : todosProjetos.filter(p => p.categoria === filtroAtivo);

    const projetosExibidos = baseFiltrada.slice(0, limite);

    // 3. Tipamos o parâmetro 'projetos' como um array de Projeto (Projeto[])
    const renderizarBlocos = (projetos: Projeto[]): JSX.Element[] => {
        const blocosHTML: JSX.Element[] = [];
        for (let i = 0; i < projetos.length; i += 6) {
            const grupo = projetos.slice(i, i + 6);
            blocosHTML.push(
                <div key={`bloco-${i}`} className="space-y-6 w-full">
                    {/* 1. BANNER */}
                    {grupo[0] && (
                        <div className="relative w-full h-[500px] rounded-[8px] bg-[#DADADA] overflow-hidden group">
                            <img src={grupo[0].img} alt={grupo[0].titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute top-8 left-8 bg-white text-black font-bold px-8 py-3 rounded-[8px] text-sm shadow-md z-10">{grupo[0].titulo}</div>
                            <div className="absolute bottom-8 left-8 flex flex-wrap items-center gap-4 z-10">
                                <button className="bg-white text-black border-2 border-black p-3 rounded-[8px] hover:bg-black hover:text-white transition-all group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                                <button className="py-[14px] px-[24px] text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all">Saiba mais sobre este projeto</button>
                            </div>
                        </div>
                    )}

                    {/* 2. CARD FINO */}
                    {grupo[3] && (
                        <div className="relative w-full h-[180px] rounded-[8px] bg-[#DADADA] overflow-hidden flex items-center px-10 group">
                            <img src={grupo[3].img} alt={grupo[3].titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative bg-white text-black font-bold px-6 py-2 rounded-[8px] text-xs shadow-sm z-10">{grupo[3].titulo}</div>
                            <button className="relative ml-auto py-3 px-8 text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all z-10">Conhecer Soluções</button>
                        </div>
                    )}

                    {/* 3. GRID IGUAL */}
                    {(grupo[1] || grupo[2]) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {grupo.slice(1, 3).map((p) => (
                                <div key={p.id} className="relative h-[450px] rounded-[8px] bg-[#DADADA] overflow-hidden group">
                                    <img src={p.img} alt={p.titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute top-6 left-6 bg-white text-black font-bold px-6 py-2 rounded-[8px] text-xs shadow-sm">{p.titulo}</div>
                                    <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                                        <button className="bg-white text-black border-2 border-black p-2 rounded-[8px] hover:bg-black hover:text-white transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                        </button>
                                        <button className="py-3 px-5 text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all text-sm">Ver Detalhes</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 4. GRID ASSIMÉTRICA */}
                    {(grupo[4] || grupo[5]) && (
                        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                            {grupo[4] && (
                                <div className="relative h-[450px] rounded-[8px] bg-[#DADADA] overflow-hidden group">
                                    <img src={grupo[4].img} alt={grupo[4].titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="absolute top-6 left-6 bg-white text-black font-bold px-6 py-2 rounded-[8px] text-xs shadow-sm">{grupo[4].titulo}</div>
                                    <div className="absolute bottom-6 left-6 z-10"><button className="py-3 px-8 text-white font-semibold rounded-[8px] bg-[#432CF3] hover:bg-[#321ec4] transition-all">Ver Portfólio Completo</button></div>
                                </div>
                            )}
                            {grupo[5] && (
                                <div className="relative h-[450px] rounded-[8px] bg-[#DADADA] overflow-hidden group">
                                    <img src={grupo[5].img} alt={grupo[5].titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-6 left-6 bg-white text-black font-bold px-6 py-2 rounded-[8px] text-xs shadow-sm">{grupo[5].titulo}</div>
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <button className="bg-white text-black border-2 border-black p-2 rounded-[8px] hover:bg-black hover:text-white transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
        }
        return blocosHTML;
    };

    return (

        <section className="flex flex-col items-center">
            <div className="max-w-[1400px] w-full px-4 mb-10 space-y-6">
                <div className="mt-[100px] flex flex-wrap gap-3 items-center">
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-500 mr-2">Filtrar por:</span>
                    {categorias.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setFiltroAtivo(cat); setLimite(6); }}
                            className={`px-6 py-2 rounded-[8px] text-sm font-semibold transition-all duration-300 border ${
                                filtroAtivo === cat ? 'bg-[#432CF3] text-white border-[#432CF3] shadow-md' : 'bg-white text-black border-gray-200 hover:border-black'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {renderizarBlocos(projetosExibidos)}

            </div>

            {baseFiltrada.length > limite && (
                <div className="mb-20">
                    <button 
                        onClick={() => setLimite(prev => prev + 6)} 
                        className="group flex flex-col items-center gap-2 text-gray-400 hover:text-[#432CF3] transition-colors"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Ver mais projetos</span>
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#432CF3] group-hover:bg-[#432CF3] group-hover:text-white transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 animate-bounce mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </button>
                </div>
            )}
        </section>
    );
}