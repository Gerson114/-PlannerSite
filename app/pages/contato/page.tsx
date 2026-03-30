import type { Metadata } from "next";
import Contato from "../../components/contato/contato";

export const metadata: Metadata = {
    title: "Contato",
    description: "Entre em contato com a Agência Planner. Transforme o potencial da sua marca com uma estratégia de marketing digital sob medida.",
    alternates: {
        canonical: "https://agenciaplanner.com/pages/contato",
    },
    openGraph: {
        title: "Contato | Agência Planner",
        description: "Entre em contato com a Agência Planner. Transforme o potencial da sua marca com uma estratégia de marketing digital sob medida.",
        url: "https://agenciaplanner.com/pages/contato",
        type: "website",
    },
}

export default function ContatoO(){
    return (
        <>
            <Contato/>
        </>
    )
}