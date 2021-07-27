import React from 'react';

import { Link } from 'react-router-dom';
import { Container, ContainerHeader, Box } from './style';

// Images
import Logo from '../../../assets/images/logo.svg';

// Components
import Botao from '../../Botao';

export default function CriacaoVaga({ children }) {
  return (
    <Container>
      <ContainerHeader>
        <img src={Logo} alt="iReview - Logo" />
        <Link to="/dashboard/vagas">
          <Botao type="button">Voltar para o dashboard</Botao>
        </Link>
      </ContainerHeader>
      <Box>{children}</Box>
    </Container>
  );
}
