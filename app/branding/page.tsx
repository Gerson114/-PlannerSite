import Banner from "../components/brandings/banner/banner";
import ComoFazemos from "../components/brandings/comoFazemos/comoFazemos";
import Construir from "../components/brandings/contruir/construir";
import Faq from "../components/brandings/faq/faq";
import Fazemos from "../components/brandings/Fazemos/fazemos";
import Identidade from "../components/brandings/identidade/identidade";
import Servicos from "../components/brandings/servicos/servicos";
import HeaderMobile from "../components/header-mobile";



export default function Branding() {
    return (
        <>
            
            <HeaderMobile />
            <Banner/>
            <Construir/>
            <Fazemos/>
            <Identidade/>
            <ComoFazemos/>
            <Servicos/>
            <Faq/>
            
           
            

        </>
    )
}