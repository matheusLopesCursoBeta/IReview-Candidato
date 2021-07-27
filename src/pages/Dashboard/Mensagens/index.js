import React, { useState, useEffect } from 'react';

import {
  Container,
  ListaMensagens,
  PreviaMensagem,
  Circle,
  Conversas,
  MensagemEnviada,
  MensagemRecebida,
  ContainerEnviaMensagem,
} from './style';

// Components
import Content from '../../../components/Dashboard/Content';
import ButtonSmall from '../../../components/Dashboard/ButtonSmall';
import Button from '../../../components/Dashboard/Button';

// Icons
import IconPlus from '../../../assets/icons/plus.svg';
import IconAnexo from '../../../assets/icons/anexo.svg';
import IconEmoji from '../../../assets/icons/plus.svg';

// Images
import Avatar1 from '../../../assets/images/avatar2.svg';
import Candidato1 from '../../../assets/images/candidato1.jpg';

import { buscarConversas } from '../../../services/api';

export default function Mensagens() {
  const [previaMensagem, setPreviaMensagem] = useState([]);

  async function buscarMensagens() {
    const buscar = await buscarConversas();

    return setPreviaMensagem(buscar.data);
  }

  useEffect(() => {
    buscarMensagens();
  }, []);

  return (
    <Content active="mensagens" titulo="Mensagens">
      <ListaMensagens>
        <div className="chat-title">
          <h2>Chat</h2>
        </div>
        {previaMensagem.length <= 0 ? <h5>Ainda não possui mensagens</h5> : ''}
      </ListaMensagens>
      {/* <Conversas>
          <h2>Matheus Luiz - Desenvolvedor Full Stack</h2>
          <MensagemEnviada>
            <div>Olá, tudo bem?</div>
            <img src={Candidato1} alt="Candidato1" />
          </MensagemEnviada>
          <MensagemEnviada>
            <div>Vi seu perfil aqui e gostei bastante, vamos conversar?</div>
            <img src={Candidato1} alt="Candidato1" />
          </MensagemEnviada>
          <MensagemRecebida>
            <img src={Candidato1} alt="Candidato1" />
            <div>Olá, tudo certinho e com você?</div>
          </MensagemRecebida>
          <MensagemRecebida>
            <img src={Candidato1} alt="Candidato1" />
            <div>Claro! Vamos marcar uma call as 09:30 no dia 30/05/2021</div>
          </MensagemRecebida>
          <MensagemRecebida>
            <img src={Candidato1} alt="Candidato1" />
            <div>Combinado?</div>
          </MensagemRecebida>
          <MensagemEnviada>
            <div>Combinado</div>
            <img src={Candidato1} alt="Candidato1" />
          </MensagemEnviada>
          <ContainerEnviaMensagem>
            <img src={IconAnexo} alt="Icon - Anexo" />
            <input type="text" placeholder="Envie sua mensagem aqui" />
            <button type="button" className="button-no-style">
              <img src={IconEmoji} alt="Icon - Emoji" />
            </button>
            <Button type="button" tipo="secondary">
              ENVIAR
            </Button>
          </ContainerEnviaMensagem>
        </Conversas> */}
    </Content>
  );
}
