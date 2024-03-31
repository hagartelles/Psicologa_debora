import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header/Header";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Débora Miler | Psicóloga Clínica Online - Atendimento Profissional e Acolhedor",
  description: "Em busca de apoio psicológico? Débora Miler oferece atendimento psicológico online de qualidade, proporcionando suporte profissional e acolhedor para lidar com uma variedade de questões emocionais. Agende sua consulta hoje mesmo e dê o primeiro passo em direção ao bem-estar mental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={ubuntu.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
