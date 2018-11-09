import React, { PureComponent, Fragment } from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Arial Black", Gadget, sans-serif
`;

export default class Title extends PureComponent {
  render() {
    return (
      <StyledTitle>Simon</StyledTitle>
    )
  }
}
