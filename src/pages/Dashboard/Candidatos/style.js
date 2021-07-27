import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  margin-top: 110px;
`;

export const Candidato = styled.div`
  width: 350px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  position: relative;
  margin: 0px auto 130px auto;

  .content-candidato {
    padding: 120px 15px 25px 15px;
  }

  h2 {
    text-align: center;
    font-weight: 500;
    color: #0f3f62;
    margin-bottom: 0px;
  }

  h5 {
    color: #0f3f62;
    margin-top: 8px;
    margin-bottom: 30px;
    font-weight: 500;
    text-align: center;
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

  .buttons {
    width: 100%;
    display: flex;

    button {
      width: 100%;

      :first-child {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      :last-child {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }
  }
`;

export const ImageCandidato = styled.img`
  left: 88px;
  top: -85px;
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  height: 175px;
  width: 175px;
`;
