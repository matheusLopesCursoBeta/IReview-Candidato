import styled from 'styled-components';

import backgroundImage from '../../assets/images/background_content.jpg';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 15px 30px;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
`;

export const Box = styled.div`
  background-color: #f5f9ff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 5px;
  min-height: 87vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const TitleH1 = styled.h1`
  font-weight: 500;
  font-size: 40px;
  color: #263035;
`;

export const ContainerEtapa = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0px 25px 65px;

  @media (max-width: 750px) {
    margin: 25px 0px 25px 20px;
  }

  h2 {
    background-color: #3157ef;
    width: 25px;
    border-radius: 50%;
    text-align: center;
    padding: 3px 7px;
    color: #ffff;
    font-size: 16px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    margin-right: 10px;
    font-weight: 400;
  }

  p {
    font-weight: 500;
    color: #5b5b5b;
  }
`;

export const ContainerPlano = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #3157ef;
  border-radius: 5px;
  width: max-content;
  padding: 17px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  img {
    width: 33px;
    margin-right: 20px;
  }

  h2 {
    font-size: 17px;
    padding-bottom: 15px;
    color: #263035;
  }

  p {
    font-size: 13px;
    color: #263035;
  }
`;
