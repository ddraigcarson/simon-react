import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Button } from '../../constants/buttons'

const StyledButton = styled.button`
  border: none;
  outline: none;
  width: 50%;
  height: 50%;
  cursor: pointer;
  border-${props => props.button.position}-radius: 100%;

  background: ${props => props.button.colour}
  ${props => props.isHighlighted && css`
    background: ${props.button.highlightColour};
    box-shadow: 0 0 50px ${props.button.highlightColour};
  `}

  &:hover {
      background: ${props => props.button.highlightColour};
    } 
`;

class GameButton extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    button: PropTypes.instanceOf(Button).isRequired,
    selected: PropTypes.bool.isRequired,
    automated: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    automated: false,
  }

  onClick() {
    if (!this.props.automated) {
      this.props.onClick(this.props.button.id);
    }
  }

  render() {
    return (
      <StyledButton
        button={this.props.button}
        isAutomated={this.props.automated}
        isHighlighted={this.props.selected}
        onClick={this.onClick.bind(this)}
        />
    )
  }

};

export default GameButton;
