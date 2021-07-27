import React from 'react';

import { Container, Candidato, ImageCandidato } from './style';
import Content from '../../../components/Dashboard/Content';

import IconCalendar from '../../../assets/icons/calendar.svg';
import IconArea from '../../../assets/icons/area.svg';
import IconLocalizacao from '../../../assets/icons/localizacao.svg';
import Candidato1 from '../../../assets/images/candidato1.jpg';

import Button from '../../../components/Dashboard/Button';

export default function Candidatos() {
  return (
    <Content titulo="Candidatos" active="candidatos">
      <Container>
        <Candidato>
          <ImageCandidato src={Candidato1} alt="Candidato" />
          <div className="content-candidato">
            <h2>Roberto da silva Roberto</h2>
            <h5>Desenvolvedor Full Stack</h5>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Idade:</b>21 anos
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Calendar" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
            <div className="icon-text">
              <img src={IconLocalizacao} alt="Icon - Localizacao" />
              <p>
                <b>Localização:</b>São Paulo - SP
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button type="button" tipo="primary">
              MANDAR MENSAGEM
            </Button>
            <Button type="button" tipo="secondary">
              PERFIL COMPLETO
            </Button>
          </div>
        </Candidato>
        <Candidato>
          <ImageCandidato src={Candidato1} alt="Candidato" />
          <div className="content-candidato">
            <h2>Roberto da silva Roberto</h2>
            <h5>Desenvolvedor Full Stack</h5>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Idade:</b>21 anos
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Calendar" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
            <div className="icon-text">
              <img src={IconLocalizacao} alt="Icon - Localizacao" />
              <p>
                <b>Localização:</b>São Paulo - SP
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button type="button" tipo="primary">
              MANDAR MENSAGEM
            </Button>
            <Button type="button" tipo="secondary">
              PERFIL COMPLETO
            </Button>
          </div>
        </Candidato>
        <Candidato>
          <ImageCandidato src={Candidato1} alt="Candidato" />
          <div className="content-candidato">
            <h2>Roberto da silva Roberto</h2>
            <h5>Desenvolvedor Full Stack</h5>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Idade:</b>21 anos
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Calendar" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
            <div className="icon-text">
              <img src={IconLocalizacao} alt="Icon - Localizacao" />
              <p>
                <b>Localização:</b>São Paulo - SP
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button type="button" tipo="primary">
              MANDAR MENSAGEM
            </Button>
            <Button type="button" tipo="secondary">
              PERFIL COMPLETO
            </Button>
          </div>
        </Candidato>
        <Candidato>
          <ImageCandidato src={Candidato1} alt="Candidato" />
          <div className="content-candidato">
            <h2>Roberto da silva Roberto</h2>
            <h5>Desenvolvedor Full Stack</h5>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Idade:</b>21 anos
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Calendar" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
            <div className="icon-text">
              <img src={IconLocalizacao} alt="Icon - Localizacao" />
              <p>
                <b>Localização:</b>São Paulo - SP
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button type="button" tipo="primary">
              MANDAR MENSAGEM
            </Button>
            <Button type="button" tipo="secondary">
              PERFIL COMPLETO
            </Button>
          </div>
        </Candidato>
        <Candidato>
          <ImageCandidato src={Candidato1} alt="Candidato" />
          <div className="content-candidato">
            <h2>Roberto da silva Roberto</h2>
            <h5>Desenvolvedor Full Stack</h5>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Idade:</b>21 anos
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Calendar" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
            <div className="icon-text">
              <img src={IconLocalizacao} alt="Icon - Localizacao" />
              <p>
                <b>Localização:</b>São Paulo - SP
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button type="button" tipo="primary">
              MANDAR MENSAGEM
            </Button>
            <Button type="button" tipo="secondary">
              PERFIL COMPLETO
            </Button>
          </div>
        </Candidato>
        <Candidato>
          <ImageCandidato src={Candidato1} alt="Candidato" />
          <div className="content-candidato">
            <h2>Roberto da silva Roberto</h2>
            <h5>Desenvolvedor Full Stack</h5>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Idade:</b>21 anos
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Calendar" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
            <div className="icon-text">
              <img src={IconLocalizacao} alt="Icon - Localizacao" />
              <p>
                <b>Localização:</b>São Paulo - SP
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button type="button" tipo="primary">
              MANDAR MENSAGEM
            </Button>
            <Button type="button" tipo="secondary">
              PERFIL COMPLETO
            </Button>
          </div>
        </Candidato>
        <Candidato>
          <ImageCandidato src={Candidato1} alt="Candidato" />
          <div className="content-candidato">
            <h2>Roberto da silva Roberto</h2>
            <h5>Desenvolvedor Full Stack</h5>
            <p className="descricao">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos
            </p>
            <div className="icon-text">
              <img src={IconCalendar} alt="Icon - Calendar" />
              <p>
                <b>Idade:</b>21 anos
              </p>
            </div>
            <div className="icon-text">
              <img src={IconArea} alt="Icon - Calendar" />
              <p>
                <b>Área:</b>Tecnologia e serviços de informática
              </p>
            </div>
            <div className="icon-text">
              <img src={IconLocalizacao} alt="Icon - Localizacao" />
              <p>
                <b>Localização:</b>São Paulo - SP
              </p>
            </div>
          </div>
          <div className="buttons">
            <Button type="button" tipo="primary">
              MANDAR MENSAGEM
            </Button>
            <Button type="button" tipo="secondary">
              PERFIL COMPLETO
            </Button>
          </div>
        </Candidato>
      </Container>
    </Content>
  );
}
