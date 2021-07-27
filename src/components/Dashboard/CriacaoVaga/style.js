import styled from 'styled-components';

import backgroundImage from '../../../assets/images/background_content.jpg';

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
`;
