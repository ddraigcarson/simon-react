import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: ${props => props.theme.bigFont}
  color: ${props => props.theme.fontColour};
  margin: 0;
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
