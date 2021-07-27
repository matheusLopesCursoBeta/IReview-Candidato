import React from 'react';

import { Button } from './style';

export default function Botao({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
