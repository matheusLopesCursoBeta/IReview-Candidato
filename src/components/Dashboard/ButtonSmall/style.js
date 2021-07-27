import styled from 'styled-components';

import coresDashboard from '../../../util/coresDashboard';

export const Button = styled.button`
  border: none;
  color: #ffff;
  background-color: ${props =>
    props.tipo ? coresDashboard(props.tipo) : '#00E096'};
  box-shadow: ${props =>
      props.tipo ? `${coresDashboard(props.tipo)}69` : '#00e09669'}
    0px 3px 5px;
  padding: 7px 17px;
  border-radius: 10px;
  font-size: 14px;
`;
