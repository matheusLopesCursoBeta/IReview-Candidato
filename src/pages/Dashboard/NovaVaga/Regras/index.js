import React, { useEffect } from 'react';

import { Container, ContainerRegras, ContainerInformacao, Box, ContainerButtonSubmit } from './style';

import Button from '../../../../components/Dashboard/Button';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { useForm } from 'react-hook-form';

import regrasIdade from '../../../../assets/json/regrasIdade';
import regrasLocalizacao from '../../../../assets/json/regrasLocalizacao';
import regrasFormacao from '../../../../assets/json/regrasFormacao';
import regrasFormacaoAreas from '../../../../assets/json/regrasFormacaoAreas';
import regrasGeneros from '../../../../assets/json/regrasGeneros';
import regrasAreas from '../../../../assets/json/regrasAreas';
import regrasAnos from '../../../../assets/json/regrasAnos';
import regrasIdiomas from '../../../../assets/json/regrasIdiomas';
import regrasNivelIdioma from '../../../../assets/json/regrasNivelIdioma';
import regrasTecnologias from '../../../../assets/json/regrasTecnologias';
import regrasNiveis from '../../../../assets/json/regrasNiveis';


import limpaObjeto from '../../../../util/limpaObjeto';

export default function Regras() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if(localStorage.getItem("regras-vagas")) {
      const dados = JSON.parse(localStorage.getItem("regras-vagas"));

      reset(dados);
    }

  }, [])
  const onSubmit = e => {
    localStorage.setItem("regras-vagas", JSON.stringify(limpaObjeto(e)));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerInformacao>
        <p>
          Todas as informações abaixo são opcionais e não são visiveis para os
          candidatos!
        </p>
      </ContainerInformacao>
      <Container>
        <Box>
          <h2>Idade do candidato</h2>
          <Select
            type="text"
            tipo="dashboard"
            label="O candidato deve possuir"
            placeholder="Escolha uma regra de seleção"
            name="idade_candidato"
            control={control}
            options={regrasIdade}
            errors={errors.idade_candidato?.message}
          />
        </Box>
        <Box>
          <h2>Localidade</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="O candidato deve residir"
              placeholder="Escolha uma região"
              name="regra_localidade"
              control={control}
              options={regrasLocalizacao}
              errors={errors.regra_localidade?.message}
            />
            <Input
              type="text"
              tipo="dashboard"
              label="Usando como referência(CEP)"
              placeholder="Escolha uma regra de seleção"
              name="cep_referencia"
              control={control}
              options={{
                delimiters: ['-'],
                blocks: [5, 3],
                numericOnly: true,
              }}
              errors={errors.cep_referencia?.message}
            />
          </ContainerRegras>
        </Box>
        <Box>
          <h2>Formação</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="O candidato deve possuir formação"
              placeholder="Escolha um tipo de formação"
              name="formacao"
              control={control}
              options={regrasFormacao}
              errors={errors.formacao?.message}
            />
            <Select
              type="text"
              tipo="dashboard"
              label="Na área de"
              placeholder="Escolha uma regra de seleção"
              name="formacao_area"
              control={control}
              options={regrasFormacaoAreas}
              errors={errors.formacao_area?.message}
            />
          </ContainerRegras>
        </Box>
        <Box>
          <h2>Experiência Profissional</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="Experiência profissional em"
              placeholder="Escolha uma opção"
              name="historico_valor"
              control={control}
              options={regrasAreas}
              errors={errors.historico_valor?.message}
            />
            <Select
              type="text"
              tipo="dashboard"
              label="De no mínimo"
              placeholder="Escolha uma opção"
              name="historico_anos"
              control={control}
              options={regrasAnos}
              errors={errors.historico_anos?.message}
            />
          </ContainerRegras>
        </Box>
        <Box>
          <h2>Habilidades Tecnólogicas</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="Tecnologia que deve possuir"
              placeholder="Escolha uma opção"
              name="tecnologia"
              control={control}
              options={regrasTecnologias}
              errors={errors.tecnologia?.message}
            />
            <Select
              type="text"
              tipo="dashboard"
              label="Nível que o candidato deve possuir"
              placeholder="Escolha uma opção"
              name="tecnologia_nivel"
              control={control}
              options={regrasNiveis}
              errors={errors.tecnologia_nivel?.message}
            />
          </ContainerRegras>
        </Box>
        <Box>
          <h2>Idiomas</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="no idioma"
              placeholder="Escolha uma opção"
              name="idioma_valor"
              control={control}
              options={regrasIdiomas}
              errors={errors.idioma_valor?.message}
            />
            <Select
              type="text"
              tipo="dashboard"
              label="De no mínimo"
              placeholder="Escolha uma opção"
              name="idioma_nivel"
              control={control}
              options={regrasNivelIdioma}
              errors={errors.idioma_nivel?.message}
            />
          </ContainerRegras>
        </Box>
        <Box>
          <h2>Cursos</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="curso na área de"
              placeholder="Escolha uma opção"
              name="curso_valor"
              control={control}
              options={regrasAreas}
              errors={errors.curso_valor?.message}
            />
          </ContainerRegras>
        </Box>
        <Box>
          <h2>Certificação</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="certificação na área de"
              placeholder="Escolha uma opção"
              name="certificacao_valor"
              control={control}
              options={regrasAreas}
              errors={errors.certificacao_valor?.message}
            />
          </ContainerRegras>
        </Box>
        <Box>
          <h2>Gênero</h2>
          <ContainerRegras>
            <Select
              type="text"
              tipo="dashboard"
              label="O candidato deve ser do gênero"
              placeholder="Escolha um tipo de formação"
              name="genero"
              control={control}
              options={regrasGeneros}
              errors={errors.genero?.message}
            />
          </ContainerRegras>
        </Box>
      </Container>
      <ContainerButtonSubmit>
      <Button type="submit">Próximo</Button>
      </ContainerButtonSubmit>
    </form>
  );
}
