import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { darkTheme } from '../styles/themes';

import Game from '../containers/game/Game';
import Controls from '../containers/controls/Controls';
import Score from '../containers/score/Score';
import Header from './title/Header';
import createResponsiveLayout, { ROW } from './layout/ResponsiveLayout';

const App = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;
`;

const ResponsiveRow = createResponsiveLayout(styled.div``);

class Root extends Component {

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <App>
          <Header />
          <ResponsiveRow direction={ROW}>
            <Controls />
            <Game />
            <Score />
          </ResponsiveRow>
        </App>
      </ThemeProvider>
    );
  }
}

export default Root;
