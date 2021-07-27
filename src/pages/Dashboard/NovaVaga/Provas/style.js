import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  max-width: 500px;
  width: 400px;
  background-color: #f5f9ff;
  border-radius: 5px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin: 20px 30px;
  background-color: #fff;
  display: block;
  margin: 20px 40px;
  position: relative;
  transition: color 200ms ease-in;

  &.active {
    background-color: #0c1e5b;

    h4,
    .flex-center p {
      color: #ffff;
    }
  }

  label {
    width: 100%;
    display: block;
    text-align: left;
    color: #3c454c;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 200ms ease-in;
    overflow: hidden;
    padding: 22px 40px;
    left: 35px;

    &:before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      z-index: -1;
    }

    &:after {
      width: 32px;
      height: 32px;
      content: '';
      border: 2px solid #d1d7dc;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: 2px 3px;
      border-radius: 50%;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
    }
  }

  input:checked ~ label {
    color: #fff;

    &:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }

    &:after {
      background-color: #54e0c7;
      border-color: #54e0c7;
    }
  }

  input {
    width: 32px;
    height: 32px;
    order: 1;
    z-index: 2;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    visibility: hidden;
  }

  .padding {
    padding: 17px;
  }

  h4 {
    font-size: 18px;
    color: #0c1e5b;
  }

  .flex-center {
    margin: 30px 0px;

    img {
      width: 21px;
      margin-right: 5px;
    }

    p {
      color: #b4b4b4;
      font-size: 14px;
    }

    b {
      text-decoration: underline;
    }
  }

  button {
    border-radius: 0px;
  }
`;
