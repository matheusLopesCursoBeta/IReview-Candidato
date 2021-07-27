import React, { useState, useEffect } from 'react';

import { Container, Box } from './style';

import IconTime from '../../../../assets/icons/time.svg';
import IconNumeros from '../../../../assets/icons/numeros.svg';
import IconArea from '../../../../assets/icons/chart_area.svg';

import Button from '../../../../components/Dashboard/Button';

export default function Provas() {
  return (
    <Container>
      <Box className="box1" data-prova="1">
        <div className="padding">
          <div className="flex-between">
            <h4>Prova de redação</h4>
            <div>
              <input
                id="prova"
                name="provaca_redacao"
                onChange={e => {
                  const element = document.body.querySelector(
                    '.box1[data-prova="1"]'
                  );
                  if (e.target.checked) {
                    element.classList.add('active');
                  } else {
                    element.classList.remove('active');
                  }
                }}
                type="checkbox"
              />
              <label htmlFor="prova" />
            </div>
          </div>
          <div className="informacoes">
            <div className="flex-center">
              <img src={IconTime} alt="Icon - Time" />
              <p>
                <b>Duração: </b> 30 minutos
              </p>
            </div>
            <div className="flex-center">
              <img src={IconNumeros} alt="Icon - Time" />
              <p>
                <b>Número de questões: </b> 10
              </p>
            </div>
            <div className="flex-center">
              <img src={IconArea} alt="Icon - Time" />
              <p>
                <b>O que ela analisa?: </b> Viês comportamental
              </p>
            </div>
          </div>
        </div>
        <Button tipo="primary">VERIFICAR PROVA</Button>
      </Box>
      <Box className="box1" data-prova="2">
        <div className="padding">
          <div className="flex-between">
            <h4>Prova de redação</h4>
            <div>
              <input
                id="prova2"
                name="redacao"
                onChange={e => {
                  const element = document.body.querySelector(
                    '.box1[data-prova="2"]'
                  );
                  if (e.target.checked) {
                    element.classList.add('active');
                  } else {
                    element.classList.remove('active');
                  }
                }}
                type="checkbox"
              />
              <label htmlFor="prova2" />
            </div>
          </div>
          <div className="informacoes">
            <div className="flex-center">
              <img src={IconTime} alt="Icon - Time" />
              <p>
                <b>Duração: </b> 30 minutos
              </p>
            </div>
            <div className="flex-center">
              <img src={IconNumeros} alt="Icon - Time" />
              <p>
                <b>Número de questões: </b> 10
              </p>
            </div>
            <div className="flex-center">
              <img src={IconArea} alt="Icon - Time" />
              <p>
                <b>O que ela analisa?: </b> Viês comportamental
              </p>
            </div>
          </div>
        </div>
        <Button tipo="primary">VERIFICAR PROVA</Button>
      </Box>
      <Box className="box1" data-prova="3">
        <div className="padding">
          <div className="flex-between">
            <h4>Prova de redação</h4>
            <div>
              <input
                id="prova3"
                name="prova_racionio"
                onChange={e => {
                  const element = document.body.querySelector(
                    '.box1[data-prova="3"]'
                  );
                  if (e.target.checked) {
                    element.classList.add('active');
                  } else {
                    element.classList.remove('active');
                  }
                }}
                type="checkbox"
              />
              <label htmlFor="prova3" />
            </div>
          </div>
          <div className="informacoes">
            <div className="flex-center">
              <img src={IconTime} alt="Icon - Time" />
              <p>
                <b>Duração: </b> 30 minutos
              </p>
            </div>
            <div className="flex-center">
              <img src={IconNumeros} alt="Icon - Time" />
              <p>
                <b>Número de questões: </b> 10
              </p>
            </div>
            <div className="flex-center">
              <img src={IconArea} alt="Icon - Time" />
              <p>
                <b>O que ela analisa?: </b> Viês comportamental
              </p>
            </div>
          </div>
        </div>
        <Button tipo="primary">VERIFICAR PROVA</Button>
      </Box>
    </Container>
  );
}
