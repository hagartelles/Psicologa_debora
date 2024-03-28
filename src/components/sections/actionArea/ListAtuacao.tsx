import React, { useState } from 'react';

type AtuacaoItem = {
  title: string;
  content: string;
};

const ListAtuacao: React.FC = () => {
  const itensAreaAtuacao: AtuacaoItem[] = [
    {
      title: 'Transtornos Alimentares',
      content: 'texto 1'
    },
    {
      title: 'Transtornos de personalidade',
      content: 'texto 2'
    },
    {
      title: 'Transtornos de humor',
      content: 'texto 3'
    },
    {
      title: 'Dependência química',
      content: 'texto 4'
    },
    {
      title: 'Ansiedade',
      content: 'texto 5'
    },
    {
      title: 'Depressão',
      content: 'texto 6'
    },
    {
      title: 'Autoestima',
      content: 'texto 7'
    },
    {
      title: 'Relacionamentos',
      content: 'texto '
    }
  ];

  const AtuacaoItem: React.FC<AtuacaoItem> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    return (
      <li className='w-full my-3'>
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          className="w-full bg-burnt_rose/50 hover:bg-misty_rose font-bold py-2 mx-auto rounded-md shadow-md"
        >
          {title}
        </button>
        {isOpen && (
          <div className="  mx-auto p-4 bg-gray-100">
            {content}
          </div>
        )}
      </li>
    );
  };

  return (
    <ul className='w-full'>
      {itensAreaAtuacao.map((item, index) => (
        <AtuacaoItem key={index} {...item}/>
      ))}
    </ul>
  );
};

export default ListAtuacao;
