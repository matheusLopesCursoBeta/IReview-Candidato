import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import { Container } from './style';

import CriacaoVaga from '../../../components/Dashboard/CriacaoVaga';
import TimeLineVaga from '../../../components/Dashboard/TimeLineVaga';

// Tabs
import DadosGerais from './DadosGerais';
import Descricao from './Descricao';
import Regras from './Regras';
import Beneficios from './Beneficios';
import Provas from './Provas';
import Informacoes from './Informacoes';

export default function NovaVaga() {
  const [tabIndex, setTabIndex] = useState(1);

  const changeTab = number => {
    setTabIndex(number);
  };

  return (
    <CriacaoVaga active="vagas" titulo="Vagas - Criar Vaga">
      <Container>
        <TimeLineVaga changeTab={changeTab} />
        <Tabs selectedIndex={tabIndex - 1}>
          <TabPanel>
            <DadosGerais />
          </TabPanel>
          <TabPanel>
            <Beneficios />
          </TabPanel>
          <TabPanel>
            <Descricao />
          </TabPanel>
          <TabPanel>
            <Regras />
          </TabPanel>
          <TabPanel>
            <Provas />
          </TabPanel>
          <TabPanel>
            <Informacoes />
          </TabPanel>
        </Tabs>
      </Container>
    </CriacaoVaga>
  );
}
