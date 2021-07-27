import styled from 'styled-components';

export const Container = styled.div`
  background-color: #14245a;
  padding: 10px 25px 25px 25px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  width: 450px;
  max-width: 450px;
  margin: 30px;

  img {
    width: 50px;
  }
`;

export const Header = styled.div`
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Content = styled.div`
  padding: 50px 0px;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;

  .group {
    display: block;
    margin-right: 40px;

    :last-child {
      margin-right: 0px;
    }
  }
`;

export const Valor = styled.div`
  color: #ffff;
  font-size: 17px;
  font-weight: 600;
`;

export const Descricao = styled.div`
  color: #ffffff7a;
  font-size: 17px;
  padding-bottom: 10px;
`;
