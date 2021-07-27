import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px 15px 0px;
  border-bottom: 1px solid #ededed;
  width: 100%;
  height: 100px;
`;

export const ContainerUsuario = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;
  border-left: 1px solid #07102f2e;

  .avatar {
    width: 48px;
    margin-left: 50px;
  }

  .dados-usuario {
    padding: 0px 20px;

    h2 {
      color: #0a043c;
      font-size: 16px;
      font-weight: 700;
      padding-bottom: 3px;
    }

    p {
      color: #0a043c;
      font-size: 13px;
      font-weight: 400;
    }
  }
`;
