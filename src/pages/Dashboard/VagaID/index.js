import React from 'react';

import { ContainerOpcoes, ContainerTable } from './style';
import Content from '../../../components/Dashboard/Content';
import Button from '../../../components/Dashboard/Button';

// Icons
import IconCV from '../../../assets/icons/icons-table/cv.svg';
import IconContato from '../../../assets/icons/icons-table/contato.svg';
import IconContratar from '../../../assets/icons/icons-table/contratar.svg';
import IconRemover from '../../../assets/icons/icons-table/remover.svg';

// Icon table
import {
  IconTablePosicao,
  IconTablePontuacao,
} from '../../../components/Icons';

export default function Component() {
  return (
    <Content titulo="Vagas - Vaga 1" active="vagas">
      <ContainerOpcoes>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos
        </p>
        <div className="flex-center">
          <Button tipo="orange">EDITAR VAGA</Button>
          <Button tipo="danger">DESATIVAR VAGA</Button>
        </div>
      </ContainerOpcoes>
      <ContainerTable>
        <div className="container-table100 vagas">
          <div className="wrap-table100">
            <div className="table100">
              <table>
                <thead>
                  <tr className="table100-head">
                    <th className="column1">Posição</th>
                    <th className="column2">Pontuação</th>
                    <th className="column3">Nome</th>
                    <th className="column4">Contato</th>
                    <th className="column4">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="column1">
                      <IconTablePosicao valor="1" />
                    </td>
                    <td className="column2">
                      <IconTablePontuacao valor="95" />
                    </td>
                    <td className="column3">matheusluiz200599@gmail.com</td>
                    <td className="column4">
                      <p>
                        <b>WhatsApp: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Email: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Linkedin: </b> Clique aqui
                      </p>
                    </td>
                    <td className="column5">
                      <div className="flex-center">
                        <img src={IconCV} alt="Icon - CV" />
                        <img src={IconContato} alt="Icon - Contato" />
                        <img src={IconContratar} alt="Icon - Contratar" />
                        <img src={IconRemover} alt="Icon - Remover" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="column1">
                      <IconTablePosicao valor="1" />
                    </td>
                    <td className="column2">
                      <IconTablePontuacao valor="95" />
                    </td>
                    <td className="column3">matheusluiz200599@gmail.com</td>
                    <td className="column4">
                      <p>
                        <b>WhatsApp: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Email: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Linkedin: </b> Clique aqui
                      </p>
                    </td>
                    <td className="column5">
                      <div className="flex-center">
                        <img src={IconCV} alt="Icon - CV" />
                        <img src={IconContato} alt="Icon - Contato" />
                        <img src={IconContratar} alt="Icon - Contratar" />
                        <img src={IconRemover} alt="Icon - Remover" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="column1">
                      <IconTablePosicao valor="1" />
                    </td>
                    <td className="column2">
                      <IconTablePontuacao valor="95" />
                    </td>
                    <td className="column3">matheusluiz200599@gmail.com</td>
                    <td className="column4">
                      <p>
                        <b>WhatsApp: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Email: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Linkedin: </b> Clique aqui
                      </p>
                    </td>
                    <td className="column5">
                      <div className="flex-center">
                        <img src={IconCV} alt="Icon - CV" />
                        <img src={IconContato} alt="Icon - Contato" />
                        <img src={IconContratar} alt="Icon - Contratar" />
                        <img src={IconRemover} alt="Icon - Remover" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="column1">
                      <IconTablePosicao valor="1" />
                    </td>
                    <td className="column2">
                      <IconTablePontuacao valor="95" />
                    </td>
                    <td className="column3">matheusluiz200599@gmail.com</td>
                    <td className="column4">
                      <p>
                        <b>WhatsApp: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Email: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Linkedin: </b> Clique aqui
                      </p>
                    </td>
                    <td className="column5">
                      <div className="flex-center">
                        <img src={IconCV} alt="Icon - CV" />
                        <img src={IconContato} alt="Icon - Contato" />
                        <img src={IconContratar} alt="Icon - Contratar" />
                        <img src={IconRemover} alt="Icon - Remover" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="column1">
                      <IconTablePosicao valor="1" />
                    </td>
                    <td className="column2">
                      <IconTablePontuacao valor="95" />
                    </td>
                    <td className="column3">matheusluiz200599@gmail.com</td>
                    <td className="column4">
                      <p>
                        <b>WhatsApp: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Email: </b> (11) 94049-8448
                      </p>
                      <p>
                        <b>Linkedin: </b> Clique aqui
                      </p>
                    </td>
                    <td className="column5">
                      <div className="flex-center">
                        <img src={IconCV} alt="Icon - CV" />
                        <img src={IconContato} alt="Icon - Contato" />
                        <img src={IconContratar} alt="Icon - Contratar" />
                        <img src={IconRemover} alt="Icon - Remover" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContainerTable>
    </Content>
  );
}
