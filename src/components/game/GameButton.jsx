import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  width: 50%;
  height: 50%;
  background: ${props => props.colour};
  border-${props => props.position}-radius: 100%;
  cursor: pointer;
  ${props => props.highlighted ?`box-shadow: 0 0 50px ${props.colour};` : ""}
  outline: none;
`;

class GameButton extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    automated: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    automated: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      highlighted: false,
    };
    console.log(props.selected)
    this.onClick = this.onClick();
  }

  onClick() {
    return () => {
      if (this.props.automated) {
        // do nothing
        console.log("DOING NOTHING")
      } else {
        console.log("DOING SOMETHING")
        this.props.onClick(this.props.id);
      }
    }
  }

  render() {
    return (
      <StyledButton
        colour={this.props.colour}
        position={this.props.position}
        highlighted={this.props.selected}
        onClick={this.onClick}
        />
    )
  }

};

export default GameButton;
