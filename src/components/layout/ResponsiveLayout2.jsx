import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ROW = "row";
export const COLUMN = "column";

const ResponsiveLayout = (component) => {
  return styled(component)`
    display: flex;
    flex-direction: ${props => props.direction};
    height: 100%;
    width: 100%;

    @media screen and (max-width: 575px) {
      flex-direction: ${props => props.direction === ROW ? COLUMN : ROW};
    }
  `;
}
export default ResponsiveLayout;
