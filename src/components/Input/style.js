import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  margin: 20px 0px;

  &.default input {
    display: block;
    width: 100%;
    border: 1px solid #0000001c;
    color: #7c7d8d;
    font-size: 15px;
    padding: 13px 10px 13px 15px;
    border-radius: 5px;
  }

  &.dashboard input,
  &.dashboard textarea {
    display: block;
    border: none;
    width: 100%;
    border-radius: 8px;
    background-color: #f9f9f9;
    color: #79869f;
    padding: 17px 10px 17px 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  color: #7c7d8d;
  margin-bottom: 7px;
  font-size: 15px;
`;

export const Small = styled.small`
  font-size: 11px;
  padding-top: 8px;
  color: #e74c3c;
  position: absolute;
  bottom: -20px;
`;
