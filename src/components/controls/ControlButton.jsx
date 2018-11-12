import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledControlButton = styled.button`
  border: none;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
  background: ${props => props.theme.actionColour};
  color: ${props => props.theme.actionFontColour};

  font-family: ${props => props.theme.littleFont};
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background: ${props => props.theme.actionHoverColour};
  }

  &:disabled {
    background: ${props => props.theme.actionDisabledColour};
  }
`;

const ControlButton = (props) => {
  const onClick = () => {
    if(!props.disabled) {
      props.onClick();
    }
  }

  return(
    <StyledControlButton
      disabled={props.disabled}
      onClick={onClick}
      >
      {props.label}
    </StyledControlButton>
  )
}

ControlButton.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

ControlButton.defaultProps = {
  disabled: false,
}

export default ControlButton;
