import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface GenericCardProps {
    titulo: string;
    conteudo: string;
    icone: JSX.Element;
}

export const GenericCard: React.FC<GenericCardProps> = ({ titulo, conteudo, icone }) => (
  <Card sx={{ maxWidth: 300, maxHeight: 400, overflowY: 'auto' }}>
    <CardContent>
      {icone}
      <Typography gutterBottom variant="h5" component="div">
        {titulo}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {conteudo}
      </Typography>
    </CardContent>
  </Card>
);