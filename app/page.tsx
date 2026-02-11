

import Banner from "./components/home/banner/banner.";
import Carrossel from "./components/home/carrossel/carrossel";
import Marketing from "./components/home/marketing/marketing";
import Depoimentos from "./components/home/depoimentos/Depoimentos";
import Cliente from "./components/home/Clientes/Clientes";
import Headertop from "./components/header/header";
import HeaderMobile from "./components/header-mobile";
import Footer from "./components/header/footer";

export default function Home() {
  return (
    <>
     <Headertop/>
     <HeaderMobile/>
    <Banner/>
    <Carrossel/>
    <Marketing/>
    <Depoimentos/>
    <Cliente/>
    <Footer/>
    </>
  );
}
