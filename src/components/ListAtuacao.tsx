import React from 'react';

const itensAreaAtuacao:string[] = [
    'Transtornos Alimentares',
    'Transtornos de personalidade',
    'Transtornos de humor',
    'Dependência química',
    'Ansiedade',
    'Depressão ',
    'Autoestima',
    'Relacionamentos'
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


