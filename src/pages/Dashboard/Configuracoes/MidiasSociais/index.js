import React from 'react';
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

import { salvarMidiaSocial } from '../../../../services/api';

import retornoMensagem from '../../../../util/retornoMensagem'

export default function MidiasSociais() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const salvar = await salvarMidiaSocial(e);

    return retornoMensagem(salvar.status, salvar.data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <ContainerInputGroup>
        <Input
          type="text"
          tipo="dashboard"
          label="Site da empresa(URL)"
          name="url_site"
          control={control}
          options={{
            delimiters: [''],
          }}
          errors={errors.site?.message}
        />
          <Input
            type="text"
            tipo="dashboard"
            label="LinkedIn"
            name="url_linkedin"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.linkedin?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Youtube"
            name="url_youtube"
            control={control}
            errors={errors.youtube?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Facebook"
            name="url_facebook"
            control={control}
            errors={errors.facebook?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Instagram"
            name="url_instagram"
            control={control}
            errors={errors.instagram?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Skype"
            name="url_skype"
            control={control}
            errors={errors.skype?.message}
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
