"use client";

import { useState } from "react";
import { WPPost } from "@/app/blog/typagem/typagem";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
    post: WPPost
}

export function Conclusao({ post }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    // Renderiza apenas se existir a primeira pergunta
    if (!post.meta?.pergunta1 || !post.meta?.resposta1) return null;

    return (
        <div className="my-10">
            <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex cursor-pointer bg-[#F3F7FA] items-center justify-between p-4 font-medium text-gray-900"
                    >
                        <div className="flex items-center gap-3">
                            {/* Gemini SVG Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" fill="url(#gemini-gradient)"/>
                                <defs>
                                    <linearGradient id="gemini-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#1C7DFA"/>
                                        <stop offset="0.5" stopColor="#9B72CB"/>
                                        <stop offset="1" stopColor="#F8A740"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="text-[#432CF3] text-[23px]">Principais Conclusões</span>
                        </div>
                        <span className={`transition duration-300 ${isOpen ? "-rotate-180" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                                    <p className="text-[19px] p-[15px]">{post.meta.conclusao}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}