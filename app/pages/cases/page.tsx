
import type { Metadata } from "next";
import Casespg from "../../components/casesPG/banner/banner"
import Imagens from "../../components/casesPG/imagens/imagens"

export const metadata: Metadata = {
    title: "Cases de Sucesso",
    description: "Veja os cases de sucesso da Agência Planner. Resultados reais para marcas que apostaram no marketing digital estratégico.",
    alternates: {
        canonical: "https://agenciaplanner.com/pages/cases",
    },
    openGraph: {
        title: "Cases de Sucesso | Agência Planner",
        description: "Veja os cases de sucesso da Agência Planner. Resultados reais para marcas que apostaram no marketing digital estratégico.",
        url: "https://agenciaplanner.com/pages/cases",
        type: "website",
    },
}

export default function Cases(){
    return(
        <>

         <Casespg/>
         <Imagens/>

        </>
       
    )
}
