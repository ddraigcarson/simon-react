import React, { PureComponent, Fragment } from 'react';
import Title from "./Title";
import Description from "./Description";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  height: 20vh;
`;
export default class Header extends PureComponent {

  render() {
    return (
      <StyledHeader>
        <Title/>
        <Description/>
      </StyledHeader>
    )
  }
}
