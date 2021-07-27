import styled from 'styled-components';

export const ContainerOpcoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  p {
    width: 70%;
    text-align: left;
    font-size: 14px;
    line-height: 23px;
    color: #b5b5b5;
  }
  button {
    width: auto;

    :first-child {
      margin-right: 30px;
    }
  }
`;

export const ContainerTable = styled.div`
  width: 100%;
  text-align: left;
  border-radius: 10px;

  width: 100%;
  margin: 0 auto;

  td svg {
    width: 55px;
  }

  .column4 p {
    color: #8a8a8a;

    :first-child {
      padding-top: 20px;
    }

    padding-bottom: 10px;
    b {
      font-weight: 600;
      margin-right: 10px;
    }
  }
`;
