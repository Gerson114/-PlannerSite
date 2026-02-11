import Banner from "../components/brandings/banner/banner";
import ComoFazemos from "../components/brandings/comoFazemos/comoFazemos";
import Construir from "../components/brandings/contruir/construir";
import Fazemos from "../components/brandings/Fazemos/fazemos";
import Identidade from "../components/brandings/identidade/identidade";
import Servicos from "../components/brandings/servicos/servicos";
import HeaderMobile from "../components/header-mobile";
import Headertop from "../components/header/header";


export default function Branding() {
    return (
        <>
            <Headertop />
            <HeaderMobile />
            <Banner/>
            <Construir/>
            <Fazemos/>
            <Identidade/>
            <ComoFazemos/>
            <Servicos/>
            

        </>
    )
}