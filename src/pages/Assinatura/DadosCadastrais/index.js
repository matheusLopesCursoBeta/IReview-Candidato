import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContainerTitle, Form, ContainerInputGroup } from './style';

// Components
import {
  Content,
  Title,
  Etapa,
  PlanoEscolhido,
} from '../../../components/ContentForm';
import Input from '../../../components/Input';
import Botao from '../../../components/Botao';

// Validation
import { DadosCadastraisValidation } from '../../../validation/validations';

export default function DadosCadastrais() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(DadosCadastraisValidation),
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
      <Etapa etapa="1">Dados Cadastrais</Etapa>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContainerInputGroup>
          <div className="input-group-2">
            <Input
              type="text"
              label="Email corporativo"
              name="email"
              control={control}
              errors={errors.email?.message}
            />
            <Input
              type="text"
              label="Nome da Empresa"
              name="nome"
              control={control}
              options={{
                delimiters: [''],
              }}
              errors={errors.nome?.message}
            />
          </div>
          <div className="input-group-2">
            <Input
              type="text"
              label="CNPJ da empresa"
              name="cnpj"
              control={control}
              options={{
                numericOnly: true,
                blocks: [2, 3, 3, 4, 2],
                delimiters: ['.', '.', '/', '-'],
              }}
              errors={errors.cnpj?.message}
            />
            <Input
              type="text"
              label="Contato Empresa"
              name="contato_empresa"
              control={control}
              options={{
                delimiters: ['(', ')', '\u0020\u0020', '-'],
                blocks: [0, 2, 0, 5, 4],
                uppercase: true,
                numericOnly: true,
              }}
              errors={errors.contato_empresa?.message}
            />
          </div>
          <div className="container-button-submit">
            <Botao type="submit">Próximo</Botao>
          </div>
        </ContainerInputGroup>
      </Form>
    </Content>
  );
}
