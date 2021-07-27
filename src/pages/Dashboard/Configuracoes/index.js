import React, { useState, useEffect } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Container } from './style';

// Components
import Content from '../../../components/Dashboard/Content';

import { informacoesEmpresa } from '../../../services/api';

import DadosGerais from './DadosGerais';
import InformacoesGerais from './InformacoesGerais';
import MidiasSociais from './MidiasSociais';
import Financeiro from './Financeiro';
import Contas from './Contas';

import retornoMensagem from '../../../util/retornoMensagem';

export default function Configuracoes() {
  const [dados, setDados] = useState('');

  async function buscarDados() {
    const { id } = dados;
    const buscaEmpresa = await informacoesEmpresa(id);

    if (buscaEmpresa.status !== 200) {
      return retornoMensagem(buscaEmpresa.data);
    }

    setDados(buscaEmpresa.data);
  }

  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <Content titulo="Configurações" active="configuracoes">
      {dados ? (
        <Container>
          <Tabs className="tabs-container">
            <TabList className="tab-list">
              <Tab className="tab-item" onClick={() => buscarDados()}>
                Dados Gerais
              </Tab>
              <Tab className="tab-item" onClick={() => buscarDados()}>
                Informações Abertas
              </Tab>
              <Tab className="tab-item" onClick={() => buscarDados()}>
                Contas
              </Tab>
              <Tab className="tab-item" onClick={() => buscarDados()}>
                Mídias Sociais
              </Tab>
              <Tab className="tab-item" onClick={() => buscarDados()}>
                Financeiro
              </Tab>
            </TabList>
            <TabPanel className="tab-panel">
              <DadosGerais data={dados} />
            </TabPanel>
            <TabPanel className="tab-panel" active>
              <InformacoesGerais data={dados} />
            </TabPanel>
            <TabPanel className="tab-panel">
              <Contas data={dados} />
            </TabPanel>
            <TabPanel className="tab-panel">
              <MidiasSociais data={dados} />
            </TabPanel>
            <TabPanel className="tab-panel">
              <Financeiro data={dados} />
            </TabPanel>
          </Tabs>
        </Container>
      ) : (
        ''
      )}
    </Content>
  );
}
