import styled from 'styled-components';

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

export const ContainerPagamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 740px) {
    margin-top: 50px;
  }

  .input-group-2 {
    display: flex;
  }
`;

export const ContainerInputGroup = styled.div`
  .input-group-2 {
    @media (max-width: 740px) {
      flex-direction: column;
    }

    .input-group {
      :first-child {
        margin-right: 100px;
      }
    }
  }

  .container-button-submit {
    margin-top: 50px;
    text-align: right;

    button {
      width: 100%;
    }
  }
`;
