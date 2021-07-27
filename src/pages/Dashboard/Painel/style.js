import styled from 'styled-components';

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const Box = styled.div`
  width: 300px;
  max-width: 300px;
  border-radius: 10px;
  padding: 12px 20px;
  border: 1px solid #edf2f6;
  margin-right: 50px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  &:last-child {
    margin-right: 0px;
  }

  .descricao-icon {
    display: flex;
    align-items: center;
    padding-bottom: 25px;

    img {
      border-radius: 50%;
      border: 1px solid #f6f8fa;
      width: 45px;
      padding: 9px;
      margin-right: 20px;
    }

    h3 {
      color: #c5cee0;
      font-weight: 400;
      font-size: 15px;
    }
  }

  .valor {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: #0f3f62;
      font-size: 25px;
      font-weight: 600;
    }
  }
`;

export const ContainerDashboard = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 1099px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerCalendario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid #edf2f6;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  margin-bottom: 30px;

  div {
    display: flex;
    align-items: center;
    color: #c5cee0;
    font-size: 14px;

    :first-child {
      padding-right: 30px;
      border-right: 1px solid #edf2f6;
    }

    :last-child {
      padding-left: 30px;
    }
    img {
      margin-right: 25px;
    }
  }
`;

export const ContainerMensagens = styled.div``;

export const ContainerUltimasMensagens = styled.div`
  border: 1px solid #edf2f6;
  padding: 15px;
  border-radius: 10px;

  h2 {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #edf2f6;
    margin-bottom: 20px;
    font-weight: 500;
    color: #0f3f62;
    font-size: 20xpx;
  }
`;

export const Mensagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0px;

  &.first {
    margin-top: 0px;
  }

  p {
    font-size: 13px;
    max-width: 310px;
    line-height: 22px;
  }

  :last-child {
    margin-bottom: 0px;
  }

  .avatar-mensagem {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      width: 45px;
    }
  }
`;

export const ContainerVagas = styled.div`
  margin-right: 40px;

  @media (max-width: 1099px) {
    margin-right: 0px;
  }

  h4 {
    color: #0c1e5b;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const BoxConteudo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f2f2f2;
  padding: 13px 30px 13px 14px;
  margin: 30px 0px;
  border-radius: 20px;

  .avatar-nome {
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
  }

  p {
    color: #aeaeae;
    font-size: 14px;
  }

  .nome-data {
    padding: 0px 45px;

    h5 {
      font-weight: 500;
      color: #0c1e5b;
      font-size: 16px;
      margin-bottom: 5px;
    }
  }

  a {
    color: #f41515;
    margin-left: 50px;
  }
`;
