import React from 'react';

import { Link } from 'react-router-dom';
import { Container, ContainerLista, ContainerSair } from './style';

import Logo from '../../../assets/images/logo_dashboard.svg';

// Icons
import {
  IconDashboard,
  IconVagas,
  IconCandidatos,
  IconMensagens,
  IconConfiguracoes,
  IconSair,
} from '../../Icons';

export default function LeftMenu({ active }) {
  return (
    <Container id="menu">
      <img src={Logo} alt="Logo" />
      <ContainerLista>
        <Link to="/dashboard">
          <li className={active === 'dashboard' ? 'active' : ''}>
            <IconDashboard />
            <p>Dashboard</p>
          </li>
        </Link>
        <Link to="/dashboard/vagas">
          <li className={active === 'vagas' ? 'active' : ''}>
            <IconVagas />
            <p>Vagas</p>
          </li>
        </Link>
        <Link to="/dashboard/candidatos">
          <li className={active === 'candidatos' ? 'active' : ''}>
            <IconCandidatos />
            <p>Candidatos</p>
          </li>
        </Link>
        <Link to="/dashboard/mensagens">
          <li className={active === 'mensagens' ? 'active' : ''}>
            <IconMensagens />
            <p>Mensagens</p>
          </li>
        </Link>
        <Link to="/dashboard/configuracoes">
          <li className={active === 'configuracoes' ? 'active' : ''}>
            <IconConfiguracoes />
            <p>Configurações</p>
          </li>
        </Link>
      </ContainerLista>
      <ContainerSair>
        <button
          className="no-style"
          type="button"
          onClick={() => {
            localStorage.removeItem('dadosEmpresa');
            window.location.href = '/login';
          }}
        >
          <IconSair />
          <p>Sair</p>
        </button>
      </ContainerSair>
    </Container>
  );
}
