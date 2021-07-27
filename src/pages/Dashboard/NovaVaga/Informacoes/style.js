import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
  align-items: center;
  border: 2px dashed #ececec;
  width: 98%;
  padding: 25px;
  text-align: center;
  margin: 0 auto;
`;

export const TituloContainer = styled.div`
  text-align: left;
  padding: 30px 0px 30px 30px;

  h2 {
    font-weight: 600;
    color: #0c1e5b;
    font-size: 27px;
  }
`;

export const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  margin: 25px 35px;

  span {
    margin-right: 10px;
    color: #7c7d8d;
    font-size: 15px;
  }
`;

export const ContainerSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100%;
  }
`;
