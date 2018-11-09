import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Game from "./Game";
import Controls from "./controls/Controls";
import Score from "./scores/Score";
import Header from "./title/Header";
import ResponsiveLayout from "./layout/ResponsiveLayout";

const App = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;
`;


class Root extends Component {

  render() {
    return (
      <App>
        <Header />
        <ResponsiveLayout direction={ResponsiveLayout.ROW}>
          <Controls />
          <Game />
          <Score />
        </ResponsiveLayout>
      </App>
    );
  }
}

Root.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  resetCount: PropTypes.func,
  testProp: PropTypes.number,
};

export default Root;
