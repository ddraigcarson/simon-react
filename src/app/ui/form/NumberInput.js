import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNumberInput = styled.div`
  padding: 3px;
  margin: 3px 0px;
  border: 1px solid black;
  border-radius: 5px;

  p {
    margin: 0px;
    font-size: 13px;
    color: gray;
  }

  input {
    outline: none;
    border: none;
    width: 100%;
  }
`;

export const NumberInput = (props) => {

  return (
    <StyledNumberInput>
      <p>{props.label}</p>
      <input
        type="number"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        />
    </StyledNumberInput>
  )
}

NumberInput.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
