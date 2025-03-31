import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface GenericCardProps {
    titulo: string;
    conteudo: string;
    icone: JSX.Element;
}

export const GenericCard: React.FC<GenericCardProps> = ({ titulo, conteudo, icone }) => (
  <Card sx={{ minWidth:250 , minHeight:250,maxWidth: 250, maxHeight: 250, overflowY: 'auto' }}>
    <CardContent sx={{ textAlign: 'center' }}>
  {icone}
  <Typography 
    gutterBottom 
    variant="h5" 
    component="div"
    sx={{ 
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}
  >
    {titulo}
  </Typography>
  <Typography 
    variant="body2" 
    color="text.secondary"
    sx={{ 
      height: '64px',
      overflow: 'auto',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }}
  >
    {conteudo}
  </Typography>
</CardContent>
  </Card>
);