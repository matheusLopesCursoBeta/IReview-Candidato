import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-bottom: 55px;

  hr {
    border: 6px solid #0c1e5b;
    width: 82%;
    border-radius: 10px;
    position: absolute;
    z-index: -1;
    top: 30px;
    left: 93px;
  }
`;

export const Box = styled.div`
  margin-right: 50px;
  text-align: center;
  cursor: pointer;

  :last-child {
    margin-right: 0px;
  }

  h3 {
    margin-top: 20px;
    color: #313236;
    font-size: 17px;
  }
`;

export const Circle = styled.div`
  background-color: #0c1e5b;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .info {
    width: 14px;
  }

  img {
    width: 33px;
  }
`;
