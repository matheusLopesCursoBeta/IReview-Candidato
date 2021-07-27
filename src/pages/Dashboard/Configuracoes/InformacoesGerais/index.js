import React,  { useEffect}  from 'react';
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


import { salvarInformacoesAberta } from '../../../../services/api';

import retornoMensagem from '../../../../util/retornoMensagem';

export default function InformacoesGerais({ data }) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(data.informacao_aberta)
  }, []);

  const onSubmit = async (e) => {
    const cadastrar = await salvarInformacoesAberta(e);

    return retornoMensagem(cadastrar.status, cadastrar.data);
  }
  
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          tipo="dashboard"
          label="Descrição da empresa"
          name="descricao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.descricao?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Valores e missão da empresa"
          name="valores_missao"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.valores_missao?.message}
        />
        <Input
          type="text"
          tipo="dashboard"
          label="Banner Foto"
          name="url_banner"
          control={control}
          errors={errors.url_banner?.message}
        />
        <ContainerInputGroup className="last-group">
          <Input
            type="text"
            tipo="dashboard"
            label="Foto"
            name="url_foto"
            control={control}
            errors={errors.url_foto?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Logo"
            name="url_logo"
            control={control}
            errors={errors.url_logo?.message}
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
