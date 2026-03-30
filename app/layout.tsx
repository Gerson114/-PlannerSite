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
    default: "Agência Planner | Marketing Digital",
    template: "%s | Agência Planner",
  },
  description: "Simplificamos o marketing digital para transformar o potencial da sua marca em crescimento real, mensurável e escalável.",
  keywords: ["agência de marketing digital", "marketing digital", "branding", "SEO", "mídia paga", "Agência Planner"],
  authors: [{ name: "Agência Planner", url: "https://agenciaplanner.com" }],
  openGraph: {
    siteName: "Agência Planner",
    locale: "pt_BR",
    type: "website",
    url: "https://agenciaplanner.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agência Planner — Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agenciaplanner",
    creator: "@agenciaplanner",
    images: ["/og-image.png"],
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
