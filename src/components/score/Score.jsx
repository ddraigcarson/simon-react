import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ROUND, GAME_STATE_MESSAGES } from '../../locales/labels';

import Title from '../title/Title';
import createResponsiveLayout, { COLUMN } from '../layout/ResponsiveLayout';

const StyledScore = styled.aside`
  flex: 0 0 20vw;
  background: ${props => props.theme.lightBackground};
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  > * {
    padding: 10px
  }
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
        <Title value={`${this.props.round}`}/>
        <Title value={this.props.gameStateMessage}/>
      </ResponsiveLayout>
    )
  }
}
