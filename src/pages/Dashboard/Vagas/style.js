import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
`;

export const Vaga = styled.div`
  border-radius: 5px;
  width: 388px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0px auto 50px auto;

  .header-image {
    max-width: 100%;
  }

  .content {
    padding: 0px 25px 10px 25px;
  }

  .options {
    text-align: right;
    padding: 5px 10px 10px 0px;
  }

  h2 {
    text-align: center;
    font-weight: 500;
    color: #0f3f62;
    margin-bottom: 25px;
  }

  p {
    color: #b5b5b5;
    font-size: 13px;
    text-align: center;
  }

  .descricao {
    line-height: 20px;
    margin-bottom: 30px;
  }

  .icon-text {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    b {
      margin-right: 3px;
    }

    img {
      width: 20px;
      margin-right: 15px;
    }
  }

  button {
    font-size: 17px;
  }
`;
