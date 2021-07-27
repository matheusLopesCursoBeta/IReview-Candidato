import React from 'react';

import { Container, ContainerButton, Box } from './style';

import IconCalendar from '../../../../assets/icons/calendar.svg';
import IconBox from '../../../../assets/icons/box.svg';
import IconMoney from '../../../../assets/icons/money.svg';

import Button from '../../../../components/Dashboard/Button';

export default function Contas() {
  return (
    <Container>
      <ContainerButton>
        <Button tipo="primary">FAZER UPGRADE DO PLANO</Button>
      </ContainerButton>
      <Container>
        <Box>
          <div className="content-box">
            <h3>Dados de cobrança</h3>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Data da cobrança:</b>Todo dia 05 do mês
              </p>
            </div>
            <div className="icon-text">
              <img src={IconBox} alt="Icon - Plano" />
              <p>
                <b>Plano:</b>Plano 1 de R$99,00
              </p>
            </div>
            <div className="icon-text">
              <img src={IconMoney} alt="Icon - Money" />
              <p>
                <b>Método de pagamento:</b>Cartão de crédito terminado em{' '}
                <b>1234</b>
              </p>
            </div>
          </div>
          <Button tipo="secondary">MUDAR MÉTODO DE PAGAMENTO</Button>
        </Box>
      </Container>
    </Container>
  );
}
