import React from "react";

interface SobreMimSectionProps {
  titulo: string;
  conteudo: string;
}

const SobreMimSection: React.FC<SobreMimSectionProps> = ({ titulo, conteudo }) => {
  return (
    <div className="col-span-6 xl:col-span-12 rounded-md p-4 text-base md:text-xl">
      <h2 className="text-3xl font-bold lg:text-3xl">{titulo}</h2>
      <p className="pt-3">{conteudo}</p>
    </div>
  );
};

export default SobreMimSection;
