import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledControlButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 10px;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background: #0053ba;
  }

  &:disabled {
    background: black;
  }
`;

const ControlButton = (props) => {
  const onClick = () => {
    if(!props.disabled) {
      console.log("CLICKING")
      props.onClick()
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
  onClick: PropTypes.func,
}

ControlButton.defaultProps = {
  disabled: false,
}

export default ControlButton;
