import React, { useState } from 'react';

const itensAreaAtuacao = [
        {title: 'Transtornos Alimentares'},
        {title:'Transtornos de personalidade'},
        {title:'Transtornos de humor'},
        {title:'Dependência química'},
        {title:'Ansiedade'},
        {title:'Depressão '},
        {title:'Autoestima'},
        {title:'Relacionamentos'}
];


const CardWithDialog: React.FC<{ imageSrc: string; text: string }> = ({ imageSrc, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-3 w-full">
      <button
        onClick={handleClick}
        aria-expanded={isOpen}
        className="w-3/4 bg-burnt_rose/50 hover:bg-misty_rose font-bold py-2 mx-auto rounded shadow-md"
      >
        Abrir Card
      </button>
      {isOpen && (
        <div className="w-3/4 mt-2 mx-auto p-4 bg-gray-100">
        </div>
      )}
    </div>
  );
};

export const ListAtuacao: React.FC = () => {
    return (
      <ul>
        {itensAreaAtuacao.map((item, index) => (
          <li key={index}> {item.title}</li>
        ))}
      </ul>
    );
  };

export default CardWithDialog;
