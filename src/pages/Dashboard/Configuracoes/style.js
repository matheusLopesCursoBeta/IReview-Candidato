import styled from 'styled-components';

export const Container = styled.div`
  .tab-list {
    display: flex;
    align-items: center;
    margin-bottom: 100px;
  }

  .tab-item {
    border: 1px solid #edf2f6;
    box-shadow: rgb(206 206 206 / 20%) 0px 2px 8px 0px;
    padding: 12px 30px;
    margin-right: 50px;
    color: #0c1e5b;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

    :last-child {
      margin-right: 0px;
    }

    &.react-tabs__tab--selected {
      background-color: #0c1e5b;
      color: #ffff;
    }
  }

  .tab-panel {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
