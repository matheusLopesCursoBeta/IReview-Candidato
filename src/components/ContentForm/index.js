import React from 'react';

import {
  Container,
  ContainerHeader,
  ContainerEtapa,
  Box,
  TitleH1,
  ContainerPlano,
} from './style';

// Components
import Botao from '../Botao';

// Images
import Logo from '../../assets/images/logo.svg';

// Icons
import IconList from '../../assets/icons/list.svg';

export const Content = ({ children }) => {
  return (
    <Container>
      <ContainerHeader>
        <img src={Logo} alt="iReview - Logo" />
        <Botao type="button">Fazer login</Botao>
      </ContainerHeader>
      <Box>{children}</Box>
    </Container>
  );
};

export const Title = ({ children }) => {
  return <TitleH1>{children}</TitleH1>;
};

export const Etapa = ({ etapa, children }) => {
  return (
    <ContainerEtapa className="etapa">
      <h2>{etapa}</h2>
      <p>{children}</p>
    </ContainerEtapa>
  );
};

export const PlanoEscolhido = ({ children, className }) => {
  return (
    <ContainerPlano className={className}>
      <img src={IconList} alt="Icon list" />
      <div>
        <h2>Plano Escolhido</h2>
        <p>{children}</p>
      </div>
    </ContainerPlano>
  );
};
