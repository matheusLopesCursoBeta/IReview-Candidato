import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  ContainerBox,
  Box,
  ContainerVagas,
  BoxConteudo,
  ContainerDashboard,
  ContainerMensagens,
  ContainerCalendario,
  ContainerUltimasMensagens,
  Mensagem,
} from './style';

// Components
import Content from '../../../components/Dashboard/Content';
import ButtonSmall from '../../../components/Dashboard/ButtonSmall';

// Icons
import IconMarket from '../../../assets/icons/market.svg';
import IconCalendar from '../../../assets/icons/calendar.svg';
import Avatar2 from '../../../assets/images/avatar2.svg';

export default function Painel() {
  const isDesktopMedium = useMediaQuery({ maxDeviceWidth: 1320 });
  const isDesktopSmall = useMediaQuery({ maxDeviceWidth: 990 });

  return (
    <Content active="dashboard" titulo="Dashboard">
      <ContainerBox>
        <Box>
          <div className="descricao-icon">
            <img src={IconMarket} alt="Icon - Market" />
            <h3>TOTAL DE CURRÍCULOS</h3>
          </div>
          <div className="valor">
            <h2>112.00</h2>
            <ButtonSmall tipo="primary">+3,5%</ButtonSmall>
          </div>
        </Box>
        <Box>
          <div className="descricao-icon">
            <img src={IconMarket} alt="Icon - Market" />
            <h3>TOTAL DE CURRÍCULOS</h3>
          </div>
          <div className="valor">
            <h2>112.00</h2>
            <ButtonSmall tipo="primary">+3,5%</ButtonSmall>
          </div>
        </Box>
        {!isDesktopSmall ? (
          <Box>
            <div className="descricao-icon">
              <img src={IconMarket} alt="Icon - Market" />
              <h3>TOTAL DE CURRÍCULOS</h3>
            </div>
            <div className="valor">
              <h2>112.00</h2>
              <ButtonSmall tipo="primary">+3,5%</ButtonSmall>
            </div>
          </Box>
        ) : (
          ''
        )}

        {!isDesktopMedium ? (
          <Box>
            <div className="descricao-icon">
              <img src={IconMarket} alt="Icon - Market" />
              <h3>TOTAL DE CURRÍCULOS</h3>
            </div>
            <div className="valor">
              <h2>112.00</h2>
              <ButtonSmall tipo="primary">+3,5%</ButtonSmall>
            </div>
          </Box>
        ) : (
          ''
        )}
      </ContainerBox>
      <ContainerDashboard>
        <div>
          <ContainerVagas>
            <h4>Melhores candidatos da semana</h4>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Matheus Luiz Matos Lopes</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Matheus Luiz Matos Lopes</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Matheus Luiz Matos Lopes</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
          </ContainerVagas>
          <ContainerVagas>
            <h4>Candidatos recém inscritos</h4>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Matheus Luiz Matos Lopes</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
            <BoxConteudo>
              <div className="avatar-nome">
                <img src={Avatar2} alt="Avatar" />
                <div className="nome-data">
                  <h5>Matheus Luiz Matos Lopes</h5>
                  <p>15 Março, 2021</p>
                </div>
              </div>
              <p>Segunda, 15 de março de 2021</p>
              <Link to="/dashboard/candidatos/x">VER</Link>
            </BoxConteudo>
          </ContainerVagas>
        </div>
        <ContainerMensagens>
          <ContainerCalendario>
            <div>
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>20/05/1999 00:00:00</p>
            </div>
            <div>
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>20/05/1999 00:00:00</p>
            </div>
          </ContainerCalendario>
          <ContainerUltimasMensagens>
            <h2>Últimas Mensagens</h2>
            <Mensagem className="first">
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
            <Mensagem>
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
            <Mensagem>
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
            <Mensagem>
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
            <Mensagem>
              <div className="avatar-mensagem">
                <img src={Avatar2} alt="Avatar 2" />
                <p>
                  Olá, tudo bem? Vi sobre o processo seletivo. Vamos conversar?
                </p>
              </div>
              <ButtonSmall tipo="primary">VER</ButtonSmall>
            </Mensagem>
          </ContainerUltimasMensagens>
        </ContainerMensagens>
      </ContainerDashboard>
    </Content>
  );
}
