import Banner from "./components/banner/banner";
import Filtro from "./components/filtro/filtro";
import Posts from "./components/posts/posts";
import Resultado from "./components/resultado/resultado";




export default function blog(){
    return(
        <>
        <Banner/>
        <Filtro/>
        <Resultado/>
        <Posts/>
        </>
    )
}