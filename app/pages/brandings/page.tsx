import Identidade from "@/app/components/services/identidade/identidade";
import Riscoinercia from "@/app/components/services/riscodainercia/riscoinercia";
import Servicos from "@/app/components/services/servicos/servicos";
import Banner from "@/app/services/Brandings/banner/banner";
import Empresas from "@/app/services/Brandings/empresas/empresas";
import Faq from "@/app/unicos/faq/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Branding e Identidade Visual",
    description: "Criamos identidades visuais que comunicam os valores da sua marca e geram reconhecimento no mercado. Veja nossos serviços de branding.",
    alternates: {
        canonical: "https://agenciaplanner.com/pages/brandings",
    },
    openGraph: {
        title: "Branding e Identidade Visual | Agência Planner",
        description: "Criamos identidades visuais que comunicam os valores da sua marca e geram reconhecimento no mercado.",
        url: "https://agenciaplanner.com/pages/brandings",
        type: "website",
    },
}


export default function Brandings(){
    return(
        <>
        <Banner/>
        <Empresas/>
        <Identidade/>
        <Riscoinercia/>
        <Servicos/>
        <Faq/>
        

        </>
    )
}