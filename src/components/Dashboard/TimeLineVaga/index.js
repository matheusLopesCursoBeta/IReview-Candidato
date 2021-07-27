import React from 'react';

import { Container, Box, Circle } from './style';

import IconDados from '../../../assets/icons/dados.svg';
import IconAtividadesExercidas from '../../../assets/icons/atividadesexercidas.svg';
import IconRegras from '../../../assets/icons/ranqueamento.svg';
import IconEtapas from '../../../assets/icons/steps.svg';
import IconProvas from '../../../assets/icons/regras.svg';
import IconBox from '../../../assets/icons/box2.svg';
import IconComunicacao from '../../../assets/icons/comunicacao.svg';

import IconInfo from '../../../assets/icons/info.svg';

export default function TimeLineVaga({ changeTab }) {
  return (
    <Container>
      <hr />
      <Box onClick={() => changeTab(1)}>
        <Circle>
          <img src={IconDados} alt="Icon - Dados" />
        </Circle>
        <h3>Dados Gerais</h3>
      </Box>
      <Box onClick={() => changeTab(2)}>
        <Circle>
          <img src={IconBox} alt="Icon - Box" />
        </Circle>
        <h3>Benefícios</h3>
      </Box>
      <Box onClick={() => changeTab(3)}>
        <Circle>
          <img src={IconAtividadesExercidas} alt="Icon - Atividade Exercidas" />
        </Circle>
        <h3>Atividade Exercidas</h3>
      </Box>
      <Box onClick={() => changeTab(4)}>
        <Circle>
          <img src={IconRegras} alt="Icon - Regras de seleção" />
        </Circle>
        <h3>Regras de seleção</h3>
      </Box>
      <Box onClick={() => changeTab(5)}>
        <Circle>
          <img src={IconProvas} alt="Icon - Provas de seleção" />
        </Circle>
        <h3>Provas</h3>
      </Box>
      <Box onClick={() => changeTab(6)}>
        <Circle>
          <img src={IconInfo} alt="Icon - IconInfo" className="info" />
        </Circle>
        <h3>Informações Importante</h3>
      </Box>
    </Container>
  );
}
