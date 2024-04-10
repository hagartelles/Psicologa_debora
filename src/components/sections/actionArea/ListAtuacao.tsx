import React, { useState } from 'react';

type AtuacaoItem = {
  title: string;
  content: string;
};

const ListAtuacao: React.FC = () => {
  const itensAreaAtuacao: AtuacaoItem[] = [
    {
      title: 'Transtornos Alimentares',
      content: 'Nem sempre é possível manter uma relação saudável com a comida e quando se existe uma perturbação no comportamento alimentar, podemos considerar se tratar de um transtorno. Para que um comportamento alimentar incomum seja considerado um transtorno, o comportamento precisa ser constante por um determinado período e causar prejuízo significativo.'
    },
    {
      title: 'Transtornos de personalidade',
      content: 'Os traços de personalidade representam padrões de pensamento, percepção, reação e relacionamento que permanecem relativamente estáveis ao longo do tempo e os transtornos de personalidade existem quando esses traços se tornam tão pronunciados, rígidos e mal-adaptativos que prejudicam o funcionamento, as adaptações sociais e podem causar sofrimento significativo para o paciente ou pessoas que se relacionam com ele.'
    },
    {
      title: 'Transtornos de humor',
      content: 'texto 3'
    },
    {
      title: 'transtornos de ansiedade',
      content: 'texto 4'
    },
    {
      title: 'Transtornos depressivos',
      content: 'texto 5'
    },
    {
      title: 'Dependência química',
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
