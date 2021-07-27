import React, { useEffect } from 'react';

import { Container, ContainerSubmit, Box } from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';
import IconTrash from '../../../../assets/icons/trash.svg';

import { useForm } from 'react-hook-form';

export default function Descricao() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if(localStorage.getItem("atividade-vagas")) {
      const dados = JSON.parse(localStorage.getItem("atividade-vagas"));

      reset(dados);
    }
  }, []);

  const onSubmit = async e  => {
    localStorage.setItem("atividade-vagas", JSON.stringify(e));
  }

  return (
    <Container>
      <Box onSubmit={handleSubmit(onSubmit)}>
        <Input
          tipo="dashboard"
          textarea={true}
          rowstextarea={10}
          label="Descrição da vaga"
          name="descricao"
          control={control}
          placeholder="➡️ Descrição da vaga:

          Conte um pouco sobre sua empresa e a cultura organizacional. É o momento do candidato saber com que time ele vai trabalhar, o que você espera dele (experiências, conhecimentos, soft e hard skills) e as responsabilidades que ele vai ter. Você pode se basear no modelo:
          
          ➡️ Empresa:
          
          Conte sua história, valores da empresa e como seu time muda o mundo. Comente características que você espera encontrar no candidato.
          
          No time de (área da vaga) você vai trabalhar com pessoas extremamente analíticas, detalhistas… e vai ser responsável por:
          
          Atividade 1
          Atividade 2
          Atividade 3dd
          
          ➡️ Experiencias desejáveis:
          
          Experiencia 1
          Experiencia 2
          Experiencia 3"
          errors={errors.descricao?.message}
        />
        <Input
          tipo="dashboard"
          textarea={true}
          rowstextarea={10}
          label="Conte um pouco mais como será a rotina"
          name="rotina"
          control={control}
          placeholder="Descreva como será a rotina"
          errors={errors.rotina?.message}
        />
        <ContainerSubmit>
          <Button tipo="primary">Próximo</Button>
        </ContainerSubmit>
      </Box>
    </Container>
  );
}
