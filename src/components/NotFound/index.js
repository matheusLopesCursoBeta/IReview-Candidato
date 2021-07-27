import React from 'react';
import Lottie from 'react-lottie';
import { Container } from './style';

import animationData from '../../assets/json/lottie_not_found.json';

export default function NotFound({ title, opcao }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Lottie options={defaultOptions} height={450} width={450} />
      {opcao || ''}
    </Container>
  );
}
