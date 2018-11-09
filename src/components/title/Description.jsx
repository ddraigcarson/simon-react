import React, { PureComponent, Fragment } from 'react';
import styled from "styled-components";

const StyledDescription = styled.summary`
  font-family: Arial, Helvetica, sans-serif
`;

export default class Description extends PureComponent {
  render() {
    return (
      <StyledDescription>
        Get ready to test your mental mettle! Repeat the patterns and advance to higher levels.
      </StyledDescription>
    )
  }
}
