import React, { useState, useEffect } from 'react';
import { ContainerFinalizaOperacao, Box, ContainerDados } from './style';

// Components
import { Content } from '../../../components/ContentForm';

export default function FormasPagamento() {
  const [dadosTransacao, setDadosTransacao] = useState('');
  const [titulo, setTitulo] = useState('');

  useEffect(() => {}, []);

  return (
    <Content>
      <ContainerFinalizaOperacao>
        <img src={dadosTransacao.img} alt="Transacao" />
        <hr />
        <ContainerDados>
          <h2>Resumo da Transação {dadosTransacao.idTransacao}</h2>
          <Box>
            {/* <img src={List} alt="List" /> */}
            <div>
              <p>
                <b>Plano escolhido:</b> {dadosTransacao.plano}
              </p>
              <p>
                <b>Data da transação:</b> {dadosTransacao.data_transacao}
              </p>
              <p>
                <b>Dia a ser debitado:</b> {dadosTransacao.dia_debito}
              </p>
              <p>
                <b>Forma de pagamento:</b> {dadosTransacao.forma_pagamento}
              </p>
              <p>
                <b>Valor a ser debitado</b> {dadosTransacao.valor}
              </p>
            </div>
          </Box>
        </ContainerDados>
      </ContainerFinalizaOperacao>
    </Content>
  );
}
