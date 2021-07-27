import React, { useState, useEffect } from 'react';

import { Container, ContainerButtonNovo, Box } from './style';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import IconEdit from '../../../../assets/icons/icons-table/edit.svg';
import IconDelete from '../../../../assets/icons/icons-table/delete.svg';

// Components
import Button from '../../../../components/Dashboard/Button';
import Modal from '../../../../components/Modal';
import Input from '../../../../components/Input';
import NotFound from '../../../../components/NotFound';

import { ContaValidation } from '../../../../validation/validations';

import {
  buscarConta,
  salvarConta,
  editarConta,
} from '../../../../services/api';

import retornoMensagem from '../../../../util/retornoMensagem';

export default function Contas() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [novaConta, setNovaConta] = useState(true);
  const [idAtivo, setIDAtivo] = useState('');

  const openModalNovaConta = () => {
    setOpenModal(true);
  };

  async function buscarContas() {
    const buscar = await buscarConta();

    return setData(buscar.data);
  }

  useEffect(() => {
    buscarContas();
  }, []);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContaValidation),
  });

  const onSubmit = async e => {
    let response;

    if (novaConta) {
      if (!e.senha) {
        return retornoMensagem(400, 'Preencha uma senha!');
      }
      response = await salvarConta(e);
    } else {
      response = await editarConta(e);
    }

    retornoMensagem(response.status, response.data);

    buscarContas();

    return setOpenModal(false);
  };

  return (
    <Container>
      <Modal
        isOpen={openModal}
        isClose={() => setOpenModal(false)}
        title="Criar uma nova conta"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            tipo="dashboard"
            label="Nome do funcionário"
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
            label="Cargo"
            name="cargo"
            control={control}
            options={{
              delimiters: [''],
            }}
            errors={errors.cargo?.message}
          />
          <Input
            type="text"
            tipo="dashboard"
            label="Email"
            name="email"
            control={control}
            errors={errors.email?.message}
          />
          <Input
            type="password"
            tipo="dashboard"
            label="Senha"
            name="senha"
            control={control}
            errors={errors.senha?.message}
          />
          <Button type="submit">Salvar nova conta</Button>
        </form>
      </Modal>
      {data.length <= 0 ? (
        <NotFound
          title="Ops! Não achamos nada por aqui"
          opcao={
            <Button
              type="button"
              onClick={() => {
                setNovaConta(true);
                reset({});
                openModalNovaConta();
              }}
            >
              Adicionar um nova conta
            </Button>
          }
        />
      ) : (
        <>
          <ContainerButtonNovo>
            <Button
              type="button"
              onClick={() => {
                setNovaConta(true);
                reset({});
                openModalNovaConta();
              }}
            >
              Nova Conta
            </Button>
          </ContainerButtonNovo>
          <div className="container-table100">
            <div className="wrap-table100">
              <div className="table100">
                <table>
                  <thead>
                    <tr className="table100-head">
                      <th className="column1">Nome</th>
                      <th className="column2">Cargo</th>
                      <th className="column3">E-mail</th>
                      <th className="column4">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(item => {
                      return (
                        <tr>
                          <td className="column1">{item.nome}</td>
                          <td className="column2">{item.cargo}</td>
                          <td className="column3">{item.email}</td>
                          <td className="column4">
                            <div className="flex-center">
                              <button
                                type="button"
                                className="button-no-style"
                                tooltip="Editar Conta"
                                flow="up"
                                onClick={() => {
                                  setNovaConta(false);
                                  setOpenModal(true);
                                  setIDAtivo(item.id);
                                  reset({
                                    nome: item.nome,
                                    cargo: item.cargo,
                                    email: item.email,
                                  });
                                }}
                              >
                                <img src={IconEdit} alt="Icon - Edit" />
                              </button>
                              <button
                                type="button"
                                className="button-no-style"
                                tooltip="Deletar Conta"
                                flow="up"
                              >
                                <img src={IconDelete} alt="Icon - Delete" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}
