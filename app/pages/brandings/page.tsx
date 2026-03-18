import Identidade from "@/app/components/services/identidade/identidade";
import Riscoinercia from "@/app/components/services/riscodainercia/riscoinercia";
import Servicos from "@/app/components/services/servicos/servicos";
import Banner from "@/app/services/Brandings/banner/banner";
import Empresas from "@/app/services/Brandings/empresas/empresas";
import Faq from "@/app/unicos/faq/faq";


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