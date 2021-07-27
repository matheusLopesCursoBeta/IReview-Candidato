import React from 'react';

import { ContainerDashboard, Container, ContainerContent } from './style';

// Components
import LeftMenu from '../LeftMenu';
import Header from '../Header';

export default function Content({ titulo, active, buttonExtra, children }) {
  return (
    <ContainerDashboard>
      <LeftMenu active={active} />
      <Container id="content">
        <Header active />
        <div className="flex-center title">
          <h1>{titulo}</h1>
          {buttonExtra}
        </div>
        <ContainerContent>{children}</ContainerContent>
      </Container>
    </ContainerDashboard>
  );
}
