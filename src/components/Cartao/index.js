import React from 'react';

import { Container, Valor, Descricao, Header, Content, Footer } from './style';

export default function Cartao({
  nomeCartao,
  bandeira,
  numeroCartao,
  nomeEscritoCartao,
  validade,
  cvv,
}) {
  return (
    <Container>
      <Header>
        <h2>{nomeCartao}</h2>
        <img src={bandeira} alt="Bandeira" />
      </Header>
      <Content>
        <Valor>{numeroCartao || '* * * *  * * * *  * * * *  * * * * '}</Valor>
      </Content>
      <Footer>
        <div className="group">
          <Descricao>NOME ESCRITO</Descricao>
          <Valor>{nomeEscritoCartao || 'NOME TITULAR DO CARTÃO'}</Valor>
        </div>
        <div className="group">
          <Descricao>EXPIRES</Descricao>
          <Valor>{validade || '00/00'}</Valor>
        </div>
        <div className="group">
          <Descricao>CVV</Descricao>
          <Valor>{cvv || '000'}</Valor>
        </div>
      </Footer>
    </Container>
  );
}
