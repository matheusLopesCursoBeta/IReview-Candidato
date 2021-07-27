import React, { useState, useEffect } from 'react';

import { Container, ContainerNovo, Box, BeneficiosContainer } from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';

import IconTrash from '../../../../assets/icons/trash.svg';

import { useForm } from 'react-hook-form';

//Json
import regrasPeriocidade from '../../../../assets/json/regrasPeriocidade';
import regrasBeneficios from '../../../../assets/json/regrasBeneficios';

export default function Benenficios() {
  const [beneficios, setbeneficios] = useState([]);

  useEffect(() => {
    let beneficiosStorage = localStorage.getItem('beneficios-vagas');

    if (!beneficiosStorage) return;

    beneficiosStorage = JSON.parse(beneficiosStorage);

    console.log(beneficiosStorage);
    setbeneficios(beneficiosStorage);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = e => {
    console.log(e);
    const novo = beneficios;
    novo.push(e);
    localStorage.setItem('beneficios-vagas', JSON.stringify(novo));
    setbeneficios(novo);
  };

  const remove = item => {
    console.log('aqui');
    const novo = beneficios;

    for (var i = 0; i < novo.length; i++) {
      if (novo[i] === item) {
        novo.splice(i, 1);
      }
    }

    localStorage.setItem('beneficios-vagas', JSON.stringify(novo));
    console.log("novo1", novo);
    setbeneficios([...novo]);
  };

  return (
    <Container>
      <Box onSubmit={handleSubmit(onSubmit)}>
        {beneficios.length <= 0 ? (
          <>
            <h2>Você ainda não possui beneficios para essa vaga</h2>
          </>
        ) : (
          beneficios.map((item, index) => {
            return (
              <BeneficiosContainer className="atividade" data-index={JSON.stringify(item)}>
                {console.log(item)}
                <p>{item.beneficios.label}</p>
                <p>{item.periocidade_beneficio.label}</p>
                <p>{item.valor_beneficio}</p>
                <button
                  type="button"
                  className="button-no-style"
                  onClick={() => remove(item)}
                >
                  <img src={IconTrash} alt="Icon Trash" />
                </button>
              </BeneficiosContainer>
            );
          })
        )}
        <ContainerNovo>
          <Select
            type="text"
            tipo="dashboard"
            label="Escolha um dos benefícios"
            placeholder="Escolha"
            name="beneficios"
            control={control}
            options={regrasBeneficios}
            errors={errors.beneficios?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Escolha um dos benefícios"
            placeholder="Valor"
            name="valor_beneficio"
            control={control}
            options={{
              numericOnly: true,
            }}
            errors={errors.valor_beneficio?.message}
          />
          <Select
            type="text"
            tipo="dashboard"
            label="Periodicidade"
            placeholder="Escolha a periodicdade"
            name="periocidade_beneficio"
            control={control}
            options={regrasPeriocidade}
            errors={errors.periocidade_beneficio?.message}
          />
        </ContainerNovo>
        <Button tipo="orange">Adicionar novo</Button>
      </Box>
    </Container>
  );
}
