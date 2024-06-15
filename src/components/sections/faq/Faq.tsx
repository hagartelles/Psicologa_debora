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
      title: `Aceita convênios?`,
      content: "Não, mas forneço recibo para reembolso."}
    // Adicione mais FAQs conforme necessário
  ];

  const Faq = ({ title, content }: { title: string; content: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="mb-3 w-full  ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="w-3/4 bg-burnt_rose/50 hover:bg-misty_rose font-bold py-2 mx-auto rounded text-base md:text-lg lg:text-xl"
        >
          {title}
        </button>
        {isOpen && (
          <div className="w-3/4 mt-2 mx-auto p-4 text-base lg:text-lg ">
            {content}
          </div>
        )}
      </div>
    );
  };

  return (
    <DivBackground name="Duvidas">
        <div className="w-full container text-center pt-24">
          <h2 className="text-center m-2 mb-8 text-3xl font-bold lg:text-5xl">Dúvidas Frequentes</h2>
        {faqs.map((faq, index) => (
            <Faq key={index} title={faq.title} content={faq.content} />
        ))}
        </div>
    </DivBackground>
  );
};

export default Faqs;
