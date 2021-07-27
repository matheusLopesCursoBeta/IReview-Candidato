import styled from 'styled-components';

export const ContainerTiposPagamento = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 340px;
  max-width: 340px;
  background-color: #ffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  margin: 20px 80px;
  text-align: center;
  padding: 70px 50px 40px 50px;
  cursor: pointer;

  h2 {
    margin-top: 55px;
  }

  @media (max-width: 1110px) {
    width: 80%;
    max-width: 80%;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 50px;

  .plano {
    position: absolute;
    right: 15px;
    top: 5px;
  }

  @media (max-width: 1050px) {
    justify-content: flex-start;
    padding-left: 30px;
  }

  @media (max-width: 740px) {
    flex-direction: column;

    .plano {
      position: relative;
      left: 0;
      top: 61px;
    }
  }
`;
