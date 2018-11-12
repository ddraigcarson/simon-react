import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Description from './Description';
import { TITLE, DESCRIPTION } from '../../locales/labels'

const StyledHeader = styled.header`
  text-align: center;
  padding: 20px 15px;
  background: ${props => props.theme.lightBackground};
  border: 1px solid black;
`;
export default class Header extends PureComponent {

  render() {
    return (
      <StyledHeader>
        <Title value={TITLE}/>
        <Description value={DESCRIPTION}/>
      </StyledHeader>
    )
  }
}
