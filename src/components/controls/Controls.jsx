import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

import ControlButton from "./ControlButton";
import createResponsiveLayout, { COLUMN } from "../layout/ResponsiveLayout";
import { RESET_BUTTON, START_ROUND } from "../../locales/labels";
import { COLOURS } from "../../styles/constants";

const StyledControls = styled.nav`
  flex: 0 0 20vw;
  background: ${COLOURS.LIGHT_BACKGROUND};
  justify-content: flex-start;
  box-sizing: border-box;
`;

const ResponsiveLayout = createResponsiveLayout(StyledControls);

export default class Controls extends PureComponent {
  static propTypes = {
    startRoundDisabled: PropTypes.bool.isRequired,
    resetGameDisabled: PropTypes.bool.isRequired,
    startRound: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
  };

  render() {
    const { startRoundDisabled, resetGameDisabled, startRound, resetGame } = this.props;
    return (
      <ResponsiveLayout direction={COLUMN}>
        <ControlButton label={START_ROUND} disabled={startRoundDisabled} onClick={startRound}/>
        <ControlButton label={RESET_BUTTON} disabled={resetGameDisabled} onClick={resetGame}/>
      </ResponsiveLayout>
    )
  }
}
