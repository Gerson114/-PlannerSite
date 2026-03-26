import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Headertop from "./components/header/header";
import HeaderMobile from "./components/header-mobile";
import Footer from "./components/header/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agenciaplanner.com"),
  title: {
    default: "Agência Planner",
    template: "%s | Agência Planner",
  },
  description: "Simplificamos o marketing digital para transformar o potencial da sua marca em crescimento real, mensurável e escalável.",
  openGraph: {
    siteName: "Agência Planner",
    locale: "pt_BR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${raleway.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-raleway)' }}
        suppressHydrationWarning
      >
         <Headertop/>
          <HeaderMobile/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
