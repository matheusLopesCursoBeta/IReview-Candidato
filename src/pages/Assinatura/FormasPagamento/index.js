import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerTitle, ContainerTiposPagamento, Box } from './style';

// Components
import {
  Content,
  Title,
  Etapa,
  PlanoEscolhido,
} from '../../../components/ContentForm';

// Images
import CartaoDeCredito from '../../../assets/icons/cartao_credito.svg';
import Boleto from '../../../assets/icons/boleto.svg';

export default function FormasPagamento() {
  const history = useHistory();

  return (
    <Content>
      <ContainerTitle>
        <Title>Assinatura de plano</Title>
        <PlanoEscolhido className="plano">
          Plano 1 no valor de R$ 99,99 mensal
        </PlanoEscolhido>
      </ContainerTitle>
      <Etapa etapa="2">Formas de pagamento</Etapa>
      <ContainerTiposPagamento>
        <Box
          onClick={() => {
            localStorage.setItem('formaPagamento', 'cartao_credito');

            return history.push('/assinatura/pagamento');
          }}
        >
          <img src={Boleto} alt="Boleto" />
          <h2>Boleto bancário</h2>
        </Box>
        <Box
          onClick={() => {
            localStorage.setItem('formaPagamento', 'boleto');

            return history.push('/assinatura/revisao-dados');
          }}
        >
          <img src={CartaoDeCredito} alt="Cartão de crédito" />
          <h2>Cartão de crédito</h2>
        </Box>
      </ContainerTiposPagamento>
    </Content>
  );
}
