import React from 'react';

const itensAreaAtuacao:string[] = [
    'Transtornos Alimentares',
    'Ansiedade e Estresse',
    'Depressão',
    'Autoestima e Autoimagem',
    'Relacionamentos Interpessoais',
    'Desenvolvimento Pessoal'
    ]
const ListAtuacao: React.FC = () => {
    return (
        <ul>
            {itensAreaAtuacao.map((item) =>
            <li key={item}>{item}</li>
            )}
        </ul>
    )
};

export default ListAtuacao


