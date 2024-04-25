"use client"

import { DivBackground } from "../../globalComponents/DivBackground";
import { useState } from "react";

const Faqs = () => {
  
  const faqs = [
    {
      title: "Como agendar uma consulta?",
      content: <p>Existem duas formas: Preenchendo o formulário e entrarei em contato ou entrando em contato pelas minhas redes sociais (WhatsApp ou Instagram).</p>
    },
    {
      title: "O atendimento online é igualmente eficaz?",
      content:  <div>
                  <p>Sim! Estudos já mostram que a terapia online tem os mesmos benefícios e nível de sucesso que no modelo presencial.</p>
                  <p>Além disso, a terapia online oferece <strong>comodidade</strong>, <strong>flexibilidade</strong> e <strong>praticidade</strong>, permitindo que os pacientes realizem suas sessões no conforto de suas próprias casas, economizando tempo e evitando deslocamentos.</p>
                </div>
      
    },
    {
        title: "Por que escolher um tratamento baseado em evidencias?",
        content: 
          <p>
            Com a psicologia baseada em evidencias trago o que ja foi testado, estudado e comprovado como mais eficaz para sua demanda.
          </p>
    },
    {
        title: "Como eu posso saber se vou me identificar com você?",
        content: 
          <p>
            Antes da nossa primeira sessão, faremos uma “sessão de acolhimento”, que consiste em uma chamada de video para que possamos nos ver e você possa me conhecer um pouco antes de agendar
          </p>
    },
    {
      title: `Aceita convênios?`,
      content: "Não, mas forneço recibo para reembolso."}
    // Adicione mais FAQs conforme necessário
  ];

  const Faq = ({ title, content }: { title: string; content: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="mb-3 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-3/4 bg-burnt_rose/50 hover:bg-misty_rose font-bold py-2 mx-auto rounded shadow-md"
        >
          {title}
        </button>
        {isOpen && (
          <div className="w-3/4 mt-2 mx-auto p-4 bg-gray-100">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <DivBackground name="Duvidas">
        <div className="w-full container text-center mt-24 pt-4">
          <h2 className="text-center text-xl font-bold m-2">Dúvidas Frequentes</h2>
        {faqs.map((faq, index) => (
            <Faq key={index} title={faq.title} content={faq.content} />
        ))}
        </div>
    </DivBackground>
  );
};

export default Faqs;
