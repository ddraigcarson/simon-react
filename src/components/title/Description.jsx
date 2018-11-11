import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLOURS } from "../../styles/constants";

const StyledDescription = styled.summary`
  font-family: Arial, Helvetica, sans-serif;
  color: ${COLOURS.TEXT}
`;

export default class Description extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    return (
      <StyledDescription>
        {this.props.value}
      </StyledDescription>
    )
  }
}
