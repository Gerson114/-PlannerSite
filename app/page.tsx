

import Banner from "./components/home/banner/banner";
import Carrossel from "./components/home/carrossel/carrossel";
import Marketing from "./components/home/historia/historia";
import Depoimentos from "./components/home/depoimentos/Depoimentos";


import type { Metadata } from "next";
import Cliente from "./components/home/clientes/cliente";
import Number from "./components/home/number/number";
import Frente from "./components/home/frentes/frentes";
import Integra from "./components/home/integrar/integrar";
import Form from "./unicos/formulario-pages/form";


export const metadata: Metadata = {
    title: "Agência de Marketing Digital | Agência Planner",
    description: "Simplificamos o marketing digital para transformar o potencial da sua marca em crescimento real, mensurável e escalável. Conheça a Agência Planner.",
    alternates: {
        canonical: "https://agenciaplanner.com",
    },
    openGraph: {
        title: "Agência de Marketing Digital | Agência Planner",
        description: "Simplificamos o marketing digital para transformar o potencial da sua marca em crescimento real, mensurável e escalável.",
        url: "https://agenciaplanner.com",
        type: "website",
    },
}
export default function Home() {
  return (
    <>
     
    
    <Banner/>
    <Carrossel/>
    <Number/>
    <Marketing/>
    <Depoimentos/>
    <Frente/>
    <Cliente/>
    <Integra/>
    <Form/>
    
    
    </>
  );
}
