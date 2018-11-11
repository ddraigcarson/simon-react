import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Game from "../containers/game/Game";
import Controls from "../containers/controls/Controls";
import Score from "../containers/score/Score";
import Header from "./title/Header";
import createResponsiveLayout, { ROW } from "./layout/ResponsiveLayout";

const App = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;
`;

const Panel = createResponsiveLayout(styled.div``);

class Root extends Component {

  render() {
    return (
      <App>
        <Header />
        <Panel direction={ROW}>
          <Controls />
          <Game />
          <Score />
        </Panel>
      </App>
    );
  }
}

Root.propTypes = {};

export default Root;
