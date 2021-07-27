import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  margin: 0px auto;
`;

export const ContainerInputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &.three {
    .input-group {
      :nth-child(1),
      :nth-child(2) {
        margin-right: 55px;
      }
    }
  }

  .input-group {
    :first-child {
      margin-right: 55px;
    }
  }
`;

export const ContainerSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 35px 0px;
  width: 100%;

  button {
    text-align: right;
    width: auto;
  }
`;
