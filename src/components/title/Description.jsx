import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDescription = styled.summary`
  font-family: ${props => props.theme.littleFont};
  color: ${props => props.theme.fontColour};
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
