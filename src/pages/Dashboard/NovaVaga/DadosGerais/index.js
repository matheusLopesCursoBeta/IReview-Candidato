import React, { useState, useEffect } from 'react';

import { Form, ContainerInputGroup, ContainerSubmit } from './style';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../../../components/Dashboard/Button';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

import { DadosGeraisVagaValidation } from '../../../../validation/validations';

import regrasTipoContrato from '../../../../assets/json/regrasTipoContrato';

export default function DadosGerais() {
  const [areas, setAreas] = useState('');

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(DadosGeraisVagaValidation),
  });

  useEffect(() => {
    setAreas([
      {
        value: 1,
        label: 'Area1',
      },

      {
        value: 2,
        label: 'Area2',
      },
      {
        value: 3,
        label: 'Area3',
      },
      {
        value: 4,
        label: 'Area4',
      },
      {
        value: 5,
        label: 'Area5',
      },
    ]);
  }, []);

  useEffect(() => {
    if(localStorage.getItem("dados-gerais")) {
      const dadosGerais = JSON.parse(localStorage.getItem('dados-gerais'));
      
      reset(dadosGerais);
    }
  }, [])


  const onSubmit = async e => {
    localStorage.setItem("dados-gerais", JSON.stringify(e))
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Título da vaga"
            placeholder="Digite o título da vaga"
            name="titulo"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.titulo?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Cargo"
            placeholder="Digite o cargo da vaga"
            name="cargo"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.cargo?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            type="text"
            tipo="dashboard"
            label="Número de vagas"
            placeholder="Digite o número da vaga"
            name="numero_vagas"
            control={control}
            options={{
              numericOnly: true,
            }}
            errors={errors.numero_vagas?.message}
          />
          <Input
            tipo="dashboard"
            label="Até quando a vaga fica aberta?"
            name="data_finalizacao"
            control={control}
            type="date"
            placeholder="Escolha a data"
            errors={errors.data_finalizacao?.message}
          />
        </ContainerInputGroup>
        <Select
          tipo="dashboard"
          label="Área da vaga"
          name="tipo_area_id"
          control={control}
          options={areas}
          placeholder="Escolher Área"
          errors={errors.tipo_area_id?.message}
        />
        <ContainerInputGroup>
          <Select
            tipo="dashboard"
            label="Período da vaga"
            name="tipo_periodo_id"
            control={control}
            options={areas}
            placeholder="Escolher Período"
            errors={errors.tipo_periodo_id?.message}
          />
          <Select
            tipo="dashboard"
            label="Tipo de contrato da vaga"
            name="tipo_contrato_id"
            control={control}
            options={regrasTipoContrato}
            placeholder="Escolher Tipo Contrato"
            errors={errors.tipo_contrato_id?.message}
          />
        </ContainerInputGroup>
        <ContainerInputGroup>
          <Input
            tipo="dashboard"
            label="Salário Inicial da vaga"
            name="salario_inicial"
            control={control}
            currency
            placeholder="Escolher Salário Inicial"
            errors={errors.salario_inicial?.message}
          />
          <Input
            tipo="dashboard"
            label="Salário Final da vaga"
            name="salario_final"
            control={control}
            currency
            placeholder="Escolher Salário Final"
            errors={errors.salario_final?.message}
          />
        </ContainerInputGroup>
        <ContainerSubmit>
          <Button tipo="primary">Próximo</Button>
        </ContainerSubmit>
      </Form>
    </>
  );
}
