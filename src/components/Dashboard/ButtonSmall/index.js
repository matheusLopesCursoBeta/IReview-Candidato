import React from 'react';

import { Button } from './style';

export default function ButtonSmall({ children, tipo, ...rest }) {
  return (
    <Button tipo={tipo} {...rest}>
      {children}
    </Button>
  );
}
