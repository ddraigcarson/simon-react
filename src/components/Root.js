import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Game from "./Game";
import Controls from "./controls/Controls";
import Score from "./scores/Score";
import Header from "./title/Header";

const ResponsiveLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  flex: 1;

  .responsive-row {
    display: flex;
    flex-direction: row;
    height: 100%;
  }

  @media screen and (max-width: 575px) {
    .responsive-row {
      flex-direction: column;
    }
  }
`;


class Root extends Component {

  render() {
    return (
      <ResponsiveLayout>
        <Header />
        <main className="responsive-row">
          <Controls />
          <Game />
          <Score />
        </main>

      </ResponsiveLayout>
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
