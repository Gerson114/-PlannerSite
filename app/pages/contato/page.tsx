import type { Metadata } from "next";
import Contato from "../../components/contato/contato";

export const metadata:Metadata = {
    title: "Contato",
     alternates: {
    canonical: "/Contato",
  },
}

export default function ContatoO(){
    return (
        <>
            <Contato/>
        </>
    )
}