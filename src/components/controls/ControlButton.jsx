import React from 'react';
import styled from 'styled-components';

const StyledControlButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  margin: 0;
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
`;

const ControlButton = (props) => {

  return(
    <StyledControlButton>
      {props.label}
    </StyledControlButton>
  )
}

export default ControlButton;
