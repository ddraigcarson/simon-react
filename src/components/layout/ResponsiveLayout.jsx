import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledResponsiveLayout = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  height: 100%;
  width: 100%;

  @media screen and (max-width: 575px) {
    flex-direction: ${props => props.direction === "row" ? "column" : "row"};
  }

  ${props => props.addtionalStyles}
`;

class ResponsiveLayout extends Component {

  static ROW = "row";
  static COLUMN = "column";

  static propTypes = {
    direction: PropTypes.oneOf([ResponsiveLayout.ROW, ResponsiveLayout.COLUMN]),
  }

  static defaultProps = {
    direction: ResponsiveLayout.ROW,
  }

  render() {
    return (
      <StyledResponsiveLayout
        direction={this.props.direction}
        addtionalStyles={this.props.addtionalStyles}
        >
        {this.props.children}
      </StyledResponsiveLayout>
    )
  }
}

export default ResponsiveLayout;
