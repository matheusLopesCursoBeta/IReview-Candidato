import React,  {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  Form,
  ContainerInputGroup,
  ContainerButtonSubmit,
} from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';

import { DadosGeraisValidation } from '../../../../validation/validations';

import { salvarInformacoesEmpresa } from '../../../../services/api';

import retornoMensagem from '../../../../util/retornoMensagem';

export default function DadosGerais({ data }) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(DadosGeraisValidation),
  });

  useEffect(() => {
    console.log("data1", data);
    reset({
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      cnpj: data.cnpj
    })
  }, [])

  const onSubmit = async (e) => {
    const alterar = await salvarInformacoesEmpresa(e);

    return retornoMensagem(alterar.status, alterar.data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          tipo="dashboard"
          label="Nome da Empresa"
          name="nome"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.nome?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Telefone para Contato"
          name="telefone"
          control={control}
          options={{
            delimiters: ['(', ')', '\u0020\u0020', '-'],
            blocks: [0, 2, 0, 5, 4],
            uppercase: true,
            numericOnly: true,
          }}
          errors={errors.nome?.message}
        />
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
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
            tipo="dashboard"
            label="Email corporativo"
            name="email"
            control={control}
            errors={errors.email?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="password"
            tipo="dashboard"
            label="Senha"
            name="senha"
            control={control}
            errors={errors.senha?.message}
          />
          <Input
            type="password"
            tipo="dashboard"
            label="Confirma Senha"
            name="confirma_senha"
            control={control}
            errors={errors.confirma_senha?.message}
          />
        </ContainerInputGroup>
        <ContainerButtonSubmit>
          <Button tipo="primary" type="submit">
            SALVAR
          </Button>
        </ContainerButtonSubmit>
      </Form>
    </Container>
  );
}
