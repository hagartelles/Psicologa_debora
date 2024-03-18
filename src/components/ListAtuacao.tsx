import React from 'react';

const itensAreaAtuacao:string[] = [
    'Transtornos Alimentares',
    'Ansiedade',
    'Estresse',
    'Depressão',
    'Autoestima',
    'Autoimagem',
    'Relacionamentos Interpessoais',
    'Desenvolvimento Pessoal'
    ]

const tratamentos:string[] = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet'
]


export const ListAtuacao: React.FC = () => {
    return (
        <ul>
            {itensAreaAtuacao.map((item) =>
            <li key={item}>{item}</li>
            )}
        </ul>
    )
};

export const ListTratamento: React.FC = () => {
    return (
        <ul>
            {tratamentos.map((item) =>
            <li key={item}>{item}</li>
            )}
        </ul>
    )
};


