import Banner from "../components/brandings/banner/banner";
import ComoFazemos from "../components/brandings/riscodainercia/riscoinercia";
import Construir from "../components/brandings/contruir/construir";
import Faq from "../components/brandings/faq/faq";
import Fazemos from "../components/brandings/empresas/fazemos";
import Identidade from "../components/brandings/identidade/identidade";
import Servicos from "../components/brandings/servicos/servicos";
import HeaderMobile from "../components/header-mobile";
import type { Metadata } from "next";


export const metadata:Metadata = {
    title: "Branding",
     alternates: {
    canonical: "/Branding",
  },
}


export default function Branding() {
    return (
        <>
            
            <HeaderMobile />
            <Banner/>
            <Fazemos/>
            <Identidade/>
            <ComoFazemos/>
            <Servicos/>
            <Faq/>
            
           
            

        </>
    )
}