import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BUTTONS from '../../constants/buttons';
import GameButton from './GameButton'

const StyledGame = styled.main`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  padding: 25px 25px;
  background: ${props => props.theme.darkBackground}
`;

const Game = (props) => {
  return (
    <StyledGame>
      {
        BUTTONS.map(o =>
          <GameButton
            key={o.id}
            button={o}
            automated={props.automated}
            selected={o.id === props.selectedButton}
            onClick={props.playersMove}
          />)
      }
    </StyledGame>
  )
}

Game.propTypes = {
  automated: PropTypes.bool,
  selectedButton: PropTypes.string,
  playersMove: PropTypes.func.isRequired,
}

export default Game;
