import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLOURS } from "../../styles/constants";

const StyledTitle = styled.h1`
  font-family: "Arial Black", Gadget, sans-serif;
  margin: 0;
  color: ${COLOURS.TEXT}
`;

export default class Title extends PureComponent {

  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    return (
      <StyledTitle>{this.props.value}</StyledTitle>
    )
  }
}
