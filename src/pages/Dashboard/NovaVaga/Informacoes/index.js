import React, { useState } from 'react';

import Switch from 'react-switch';
import { Container, TituloContainer, SwitchContainer } from './style';

export default function Informacoes() {
  const [emailsConvite, setEmailsConvite] = useState(true);
  const [emailFeedback, setEmailFeedBack] = useState(true);
  const [divulgarPortais, setDivulgarPortais] = useState(true);
  const [divulgarNome, setDivulgarNome] = useState(true);
  const [statusProcesso, setStatusProcesso] = useState(true);
  const [divulgarSalario, setdivulgarSalario] = useState(true);
  const [divulgarLocalizacao, setdivulgarLocalizacao] = useState(true);
  const [apenasLink, setApenasLink] = useState(true);
  const [vagaPCD, setVagaPCD] = useState(true);

  return (
    <>
      <TituloContainer>
        <h2>Regra de comunicação</h2>
      </TituloContainer>
      <Container>
        <SwitchContainer htmlFor="material-switch">
          <span>Deseja que envie convite para participar da vaga?</span>
          <Switch
            checked={emailsConvite}
            onChange={e => setEmailsConvite(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="emailConvite"
          />
        </SwitchContainer>
        <SwitchContainer htmlFor="material-switch">
          <span>Deseja que envie convite emails de feedback?</span>
          <Switch
            checked={emailFeedback}
            onChange={e => setEmailFeedBack(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="emailFeedback"
          />
        </SwitchContainer>
        <SwitchContainer htmlFor="material-switch">
          <span>Deseja que divulgue em portais?</span>
          <Switch
            checked={divulgarPortais}
            onChange={e => setDivulgarPortais(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="divulgarPortais"
          />
        </SwitchContainer>
        <SwitchContainer htmlFor="material-switch">
          <span>Deseja que divulgue o nome da empresa?</span>
          <Switch
            checked={divulgarNome}
            onChange={e => setDivulgarNome(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="divulgarNome"
          />
        </SwitchContainer>
      </Container>
      <TituloContainer>
        <h2>Regra de exposição de dados</h2>
      </TituloContainer>
      <Container>
        <SwitchContainer>
          <span>Deseja que o processo da vaga seja mostrado?</span>
          <Switch
            checked={statusProcesso}
            onChange={e => setStatusProcesso(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="statusProcesso"
          />
        </SwitchContainer>
        <SwitchContainer>
          <span>Deseja que o salário seja mostrado?</span>
          <Switch
            checked={divulgarSalario}
            onChange={e => setdivulgarSalario(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="divulgarSalario"
          />
        </SwitchContainer>
        <SwitchContainer>
          <span>Deseja que divulgue a localização da empresa</span>
          <Switch
            checked={divulgarLocalizacao}
            onChange={e => setdivulgarLocalizacao(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="divulgarLocalizacao"
          />
        </SwitchContainer>
        <SwitchContainer>
          <span>Deseja que apenas candidatos com link acessem?</span>
          <Switch
            checked={apenasLink}
            onChange={e => setApenasLink(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="apenasLink"
          />
        </SwitchContainer>
      </Container>
      <TituloContainer>
        <h2>Outras configurações</h2>
      </TituloContainer>
      <Container>
        <SwitchContainer>
          <span>É uma vaga apenas para PCD?</span>
          <Switch
            checked={vagaPCD}
            onChange={e => setVagaPCD(e)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={40}
            className="react-switch"
            id="vagaPCD"
          />
        </SwitchContainer>
      </Container>
    </>
  );
}
