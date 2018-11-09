import React from "react";
import styled from "styled-components";

import { buttons } from "../constants/simon";
import GameButton from "./GameButton"

const StyledGame = styled.main`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  padding: 25px 25px;
`;

const Game = () => {
  return (
    <StyledGame>
      {
        buttons.map(o =>
          <GameButton
            key={o.id}
            id={o.id}
            colour={o.colour}
            position={o.position}
          />)
      }
    </StyledGame>
  )
}

export default Game;
