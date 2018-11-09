import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  width: 50%;
  height: 50%;
  background: ${props => props.colour};
  border-${props => props.position}-radius: 100%;
  cursor: pointer;
`;

class GameButton extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  };

  render() {
    return (
      <StyledButton
        colour={this.props.colour}
        position={this.props.position}
        onClick={() => console.log("PRESS")}
        />
    )
  }

};

export default GameButton;
