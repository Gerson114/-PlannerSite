import Banner from "../../components/quemsomos/banner/banner";
import Existimos from "../../components/quemsomos/erxistimos/existimos";
import Estrategia from "../../components/quemsomos/estrategia/estrategia";
import Negocios from "../../components/quemsomos/negocios/negocios";
import Pilares from "../../components/quemsomos/pilares/pilares";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quem Somos",
    description: "Conheça a Agência Planner: nossa história, equipe e os valores que guiam cada estratégia de marketing digital que entregamos.",
    alternates: {
        canonical: "https://agenciaplanner.com/pages/Quem-Somos",
    },
    openGraph: {
        title: "Quem Somos | Agência Planner",
        description: "Conheça a Agência Planner: nossa história, equipe e os valores que guiam cada estratégia de marketing digital.",
        url: "https://agenciaplanner.com/pages/Quem-Somos",
        type: "website",
    },
}


export default function QuemSomos(){
    return(
        <>
        <Banner/>
        <Existimos/>
        <Estrategia/>
        <Negocios/>
        <Pilares/>
        
        
        </>
        
    )
}