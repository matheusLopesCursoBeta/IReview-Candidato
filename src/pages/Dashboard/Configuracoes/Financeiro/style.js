import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 600px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    width: auto;
  }
`;

export const Box = styled.div`
  width: 600px;
  border: 1px solid #edf2f6;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 60px 0px;

  .content-box {
    padding: 25px;
  }

  h3 {
    font-size: 20px;
    color: #0c1e5b;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .icon-text {
    display: flex;
    align-items: center;
    padding-bottom: 30px;

    p {
      color: #b5b5b5;
      font-size: 13px;
      text-align: center;
    }

    b {
      margin-right: 5px;
    }

    img {
      width: 20px;
      margin-right: 10px;
    }
  }
`;
