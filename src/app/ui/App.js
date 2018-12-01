import React from 'react';
import styled from 'styled-components';

import Controls from './controls/container/Controls';
import Stages from './stages/container/Stages';
import Table from './table/container/Table';

const StyledApp = styled.div`
  display: flex;
  flex: 1;
`;

const StyledStages = styled(Stages)`
  flex: 0 0 200px;
`;

const StyledControls = styled(Controls)`
  flex: 0 0 200px;
`;

const StyledTable = styled(Table)`
  flex: 1;
`;

export const App = () => (
  <StyledApp>
    <StyledControls className="controls"/>
    <StyledStages className="stages" />
    <StyledTable className="table" />
  </StyledApp>
);
