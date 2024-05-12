import { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header/Header";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title:  "Débora Miler | Psicóloga Clínica Online | Psicologia Online",
  description: "Débora Miler psicológa especializada em psicologia Clínica.Proporcionando suporte profissional e acolhedor para lidar com uma variedade de questões emocionais como: ansiedade, relacionamentos, dependencia química, transtorno de humor, transtorno de personalidade, transtornos alimentares, depressão e autoestima.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <meta name="google-site-verification" content="Lx7E9so9-cbQmLM1zf0uxAKlfM6qK0iWnaWAXeYV9Og" />
      <body className={ubuntu.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
