"use client"

import { DivBackground } from "./DivBackground";
import { useState } from "react";

const Faqs = () => {
  const faqs = [
    {
      title: "Como agendar uma consulta?",
      content: "Existem duas formas: Preenchendo o formulário e entrarei em contato ou entrando em contato pelas minhas redes sociais (What'sApp ou Instagram)."
    },
    {
      title: "O atendimento online é igualmente eficaz?",
      content: "Sim! Estudos ja mostram que a terapia online tem os mesmos benefícios e nivel de sucesso que no modelo presencial."
    },
    {
        title: "Por que escolher um tratamento baseado em evidencias?",
        content: "Com a psicologia baseada em evidencias trago o que ja foi testado, estudado e comprovado como mais eficaz para sua demanda."
    },
    {
        title: "Como eu posso saber se vou me identificar com você?",
        content: "Antes da nossa primeira sessão, faremos uma “sessão de acolhimento”, que consiste em uma chamada de video para que possamos nos ver e você possa me conhecer um pouco antes de agendar"
    }
    // Adicione mais FAQs conforme necessário
  ];

  const Faq = ({ title, content }: { title: string; content: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="mb-3 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-3/4 bg-burnt_rose hover:bg-misty_rose font-bold py-2 mx-auto rounded shadow-md"
        >
          {title}
        </button>
        {isOpen && (
          <div className="w-3/4 mt-2 mx-auto p-4 bg-gray-100">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <DivBackground minHeight="500">
        <div className="w-full container text-center mt-10">
        {faqs.map((faq, index) => (
            <Faq key={index} title={faq.title} content={faq.content} />
        ))}
        </div>
    </DivBackground>
  );
};

export default Faqs;
