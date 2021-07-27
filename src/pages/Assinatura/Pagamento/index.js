import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ContainerTitle,
  Form,
  ContainerInputGroup,
  ContainerPagamento,
} from './style';

// Components
import {
  Content,
  Title,
  Etapa,
  PlanoEscolhido,
} from '../../../components/ContentForm';
import Input from '../../../components/Input';
import Botao from '../../../components/Botao';
import Cartao from '../../../components/Cartao';

// Validation
import { PagamentoValidation } from '../../../validation/validations';

//Util
import escolherBandeira from '../../../util/escolherBandeira';

export default function Pagamento() {
  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeEscrito, setNomeEscrito] = useState('');
  const [CVV, setCVV] = useState('');
  const [validadeCartao, setValidadeCartao] = useState('');
  const [documentoCartao, setDocumentoCartao] = useState('');

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PagamentoValidation),
  });

  const onSubmit = e => {
    console.log(e);
  };

  return (
    <Content>
      <ContainerTitle>
        <Title>Assinatura de plano</Title>
        <PlanoEscolhido className="plano">
          Plano 1 no valor de R$ 99,99 mensal
        </PlanoEscolhido>
      </ContainerTitle>
      <Etapa etapa="3">Pagamento</Etapa>
      <ContainerPagamento>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInputGroup>
            <Input
              type="text"
              label="Número do cartão de crédito"
              name="numero_cartao"
              control={control}
              options={{
                delimiters: [' ', ' ', ' ', ' '],
                blocks: [4, 4, 4, 4],
              }}
              onChange={e => {
                setNumeroCartao(e.target.value);
              }}
              errors={errors.numero_cartao?.message}
            />
            <div className="input-group-2">
              <Input
                type="text"
                label="Nome escrito no cartão"
                name="nome_cartao"
                control={control}
                options={{
                  delimiters: [''],
                }}
                onChange={e => {
                  setNomeEscrito(e.target.value);
                }}
                errors={errors.nome_cartao?.message}
              />
              <Input
                type="text"
                label="Código de segurança"
                name="cvv"
                control={control}
                options={{
                  blocks: [4],
                  numericOnly: true,
                }}
                onChange={e => {
                  setCVV(e.target.value);
                }}
                errors={errors.cvv?.message}
              />
            </div>
            <div className="input-group-2">
              <Input
                type="text"
                label="Validade do cartão"
                name="validade_cartao"
                control={control}
                options={{
                  numericOnly: true,
                  blocks: [2, 2],
                  delimiters: ['/'],
                }}
                onChange={e => {
                  setValidadeCartao(e.target.value);
                }}
                errors={errors.validade_cartao?.message}
              />
              <Input
                type="text"
                label="Documento do titular do cartão"
                name="documento_titular"
                control={control}
                options={{
                  numericOnly: true,
                }}
                onChange={e => {
                  setDocumentoCartao(e.target.value);
                }}
                errors={errors.documento_titular?.message}
              />
            </div>
            <div className="container-button-submit">
              <Botao type="submit">Próximo</Botao>
            </div>
          </ContainerInputGroup>
        </Form>
        <Cartao
          bandeira={escolherBandeira(numeroCartao)}
          cvv={CVV}
          nomeCartao="Cartão Principal"
          nomeEscritoCartao={nomeEscrito}
          numeroCartao={numeroCartao}
          validade={validadeCartao}
        />
      </ContainerPagamento>
    </Content>
  );
}
