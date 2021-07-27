import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  .input-group {
    margin: 35px 0px;
  }
`;

export const ContainerInputGroup = styled.div`
  display: flex;
  align-items: center;

  .input-group:first-child {
    margin-right: 65px;
  }

  &.last-group .input-group {
    margin-top: 0px;
  }
`;

export const ContainerButtonSubmit = styled.div`
  margin-top: 25px;
  text-align: right;

  button {
    width: auto;
  }
`;
