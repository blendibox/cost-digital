import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";




const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Venda Online Sem Segredos | Guia Definitivo",
  description:
    "Aprenda a vender online com clareza, estrutura e previsibilidade. Um guia estratégico para transformar conhecimento em vendas reais.",
  keywords: [
    "venda online",
    "marketing digital",
    "funil de vendas",
    "copywriting",
    "produto digital",
  ],
  openGraph: {
    title: "Venda Online Sem Segredos",
    description:
      "O guia definitivo para vender online com estratégia e previsibilidade.",
    type: "website",
    locale: "pt_BR",
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
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
