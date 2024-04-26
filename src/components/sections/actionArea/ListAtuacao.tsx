import React, { useState } from 'react';
import Image from 'next/image';

import picTrasntornoHumor from "@/../public/assets/cards/transtornoHumor.png"
import picTrasntornoPersonalidade from '@/../public/assets/cards/transtornoPersonalidade.png'
import picAutoestima from '@/../public/assets/cards/autoestima.png'
import picTrasntornoAlimentar from '@/../public/assets/cards/transtornoAlimentar.png'
import picAnsiedade from '@/../public/assets/cards/ansiedade.png'
import picDepressao from '@/../public/assets/cards/transtornoDepressivo.png'
import picRelacionamentos from '@/../public/assets/cards/relacionamentos.png'

type ImageNames =
  | typeof picTrasntornoHumor
  | typeof picTrasntornoPersonalidade
  | typeof picAutoestima
  | typeof picTrasntornoAlimentar
  | typeof picAnsiedade
  | typeof picDepressao
  | typeof picRelacionamentos

type AtuacaoItem = {
  title: string;
  content: string;
  imageName: ImageNames;
  imageDescription: string;
};

const ListAtuacao: React.FC = () => {
  const itensAreaAtuacao: AtuacaoItem[] = [
    {
      title: 'Transtornos Alimentares',
      content: 'Nem sempre é possível manter uma relação saudável com a comida e quando se existe uma perturbação no comportamento alimentar, podemos considerar se tratar de um transtorno. Para que um comportamento alimentar incomum seja considerado um transtorno, o comportamento precisa ser constante por um determinado período e causar prejuízo significativo.',
      imageName: picTrasntornoAlimentar,
      imageDescription: "Uma representação visual de transtorno alimentar - uma mulher comendo no banheiro."
    },
    {
      title: 'Transtornos de personalidade',
      content: 'Os traços de personalidade representam padrões de pensamento, percepção, reação e relacionamento que permanecem relativamente estáveis ao longo do tempo e os transtornos de personalidade existem quando esses traços se tornam tão pronunciados, rígidos e mal-adaptativos que prejudicam o funcionamento, as adaptações sociais e podem causar sofrimento significativo para o paciente ou pessoas que se relacionam com ele.',
      imageName: picTrasntornoPersonalidade,
      imageDescription: "Representação visual de transtorno de personalidade - uma mulher se olhando em um espelho quebrado."
    },
    {
      title: 'Transtornos de humor',
      content: 'Transtorno do humor é quando o paciente apresenta alterações no humor, comportamento, na energia, na forma de sentir, de pensar e agir. Esses distúrbios emocionais consistem em períodos prolongados de depressão, euforia, ou ambos. Quando maior a gravidade, o paciente pode apresentar delírios, alucinações e outros sintomas severos.',
      imageName: picTrasntornoHumor,
      imageDescription: "Representação visual de pessoa com Transtorno de Humor - Mulher com varias facetas."
    },
    {
      title: 'transtornos de ansiedade',
      content: 'A ansiedade é essencial para nossa existência e existem situações em que ela é necessária. Um certo nível de ansiedade para passar por uma rua vazia ou antes de um evento importante é normal. A ansiedade se torna patológica e disfuncional quando sua presença é constante e gera prejuízo, essa ansiedade consiste em um sentimento de insegurança e preocupação excessiva, podendo gerar inclusive sintomas físicos.',
      imageName: picAnsiedade,
      imageDescription: "Uma representação visual de ansiedade - uma mulher roendo as unhas por conta da ansiedade."
    },
    {
      title: 'Transtornos depressivos',
      content: 'Se caracteriza pela presença de humor triste, vazio ou irritável na maior parte do tempo. O transtorno interfere no funcionamento cognitivo e, muitas vezes, diminui o interesse ou o prazer nas atividades. Paciente se encontra com um sentimento de vazio persistente e sua resposta corporal aos estímulos externos é alterada. Existem subtipos e para o diagnóstico correto é necessário avaliar, mas os principais sintomas são compartilhados em todos os subtipos do transtorno.',
      imageName: picDepressao,
      imageDescription: "representação visual de depressão - uma pessoa sozinha, deitada no chão, olhando para o nada, sem saber o que pensar."
    },
    {
      title: 'Autoestima',
      content: 'Embora seja um termo do senso comum, a falta de autoestima ou baixa autoestima é uma demanda comum no consultório. Podemos definir autoestima como a forma que a pessoa se vê e o valor que dá para si. A autoestima é construída com base nas crenças positivas e negativas. Essa visão de si mesmo pode interferir negativamente em diversas áreas da vida.',
      imageName: picDepressao,
      imageDescription: "Uma representação visual de autoestima - uma mulher se abraçando."
    },
    {
      title: 'Relacionamentos',
      content: 'Outra queixa comum em consultório é a dificuldade em relacionamentos. Esses relacionamentos podem ser familiares, amorosos ou profissionais. Devemos iniciar o processo aceitando que não temos o poder de mudar o outro, mas podemos chegar a conclusões quanto a nossa responsabilidade nesses problemas interpessoais e assim melhorar as habilidades sociais e a forma de se relacionar.',
      imageName: picDepressao,
      imageDescription: "representaçaõ visual de relacionamento - um casal argumentando de forma aberta em sua casa."
    }
  ];

  const AtuacaoItem: React.FC<AtuacaoItem> = ({ title, content, imageDescription, imageName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    return (
      <li className='w-full my-3'>
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          className="w-full bg-burnt_rose/50 hover:bg-misty_rose font-bold py-2 mx-auto rounded-md shadow-md text-base md:text-lg lg:text-xl"
        >
          {title}
        </button>
        {isOpen && (
          <div className="text-base lg:text-lg   mx-auto ">
            <Image
              src={imageName}
              alt={imageDescription}
              width={1366}>
              
            </Image>

            {content}
          </div>

        )}
      </li>
    );
  };

  return (
    <ul className='w-full'>
      {itensAreaAtuacao.map((item, index) => (
        <AtuacaoItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default ListAtuacao;
