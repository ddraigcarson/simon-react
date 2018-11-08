import React, { Component } from "react";
import PropTypes from "prop-types";

class Root extends Component {

  render() {
    return (
      <div>
        <div>{`test component ${this.props.testProp}`}</div>
        <button onClick={this.props.increment}>Up</button>
        <button onClick={this.props.decrement}>Down</button>
      </div>
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
