import React from 'react';

import { Botao } from './style';

export default function Button({ children, auto, tipo, ...rest }) {
  return (
    <Botao {...rest} auto={auto} tipo={tipo}>
      {children}
    </Botao>
  );
}
