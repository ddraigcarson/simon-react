import React, { PureComponent, Fragment } from 'react';
import styled from "styled-components";

import ResponsiveLayout, { COLUMN } from "../layout/ResponsiveLayout2";
import ControlButton from "./ControlButton";

const StyledControls = styled.nav`
  flex: 0 0 20vw;
  background: beige;
  justify-content: space-around;
`;

const ResponsiveLayout2 = ResponsiveLayout(StyledControls);

export default class Controls extends PureComponent {

  render() {
    return (
      <ResponsiveLayout2 direction={COLUMN}>
          <ControlButton label="Test"/>
          <ControlButton label="Test"/>
      </ResponsiveLayout2>
    )
  }
}
