import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

const StyledStages = styled.div`
  padding: 0px 0px;
`;

const StyledStage = styled.div`
  padding: 3px 5px;
  border: 1px solid black;
  ${
    props => props.selected && `
      background-color: DarkOrange
      color: white;
    `
  }
`;

export const Stages = (props) => {

  return (
    <StyledStages className={props.className}>
      {_.map(props.stages,
        stage => <StyledStage key={stage} selected={stage === props.currentStage} onClick={() => props.startStage(stage)}>
          {stage}
        </StyledStage>
      )}
    </StyledStages>
  )
}

Stages.propTypes = {
  className: PropTypes.string,
  stages: PropTypes.array.isRequired,
  currentStage: PropTypes.string,
  startStage: PropTypes.func,
}
