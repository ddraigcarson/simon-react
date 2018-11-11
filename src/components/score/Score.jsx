import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Title from "../title/Title";
import { ROUND } from "../../locales/labels";
import { COLOURS } from "../../styles/constants";
import { GAME_STATE_MESSAGES } from "../../locales/labels";
import createResponsiveLayout, { COLUMN } from "../layout/ResponsiveLayout";

const StyledScore = styled.aside`
  flex: 0 0 20vw;
  background: ${COLOURS.LIGHT_BACKGROUND};
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;

const ResponsiveLayout = createResponsiveLayout(StyledScore);

export default class Scores extends PureComponent {
  static propTypes = {
    gameStateMessage: PropTypes.oneOf(GAME_STATE_MESSAGES).isRequired,
    round: PropTypes.number.isRequired,
  }

  render() {
    return (
      <ResponsiveLayout direction={COLUMN}>
        <Title value={ROUND}/>
        <Title value={this.props.round}/>
        <Title value={this.props.gameStateMessage}/>
      </ResponsiveLayout>
    )
  }
}
