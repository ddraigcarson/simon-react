import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Root extends Component {

  render() {
    return (
      <div>
        <div>{`test component ${this.props.testProp}`}</div>
        <a onClick={this.props.increment}>Up</a>
        <a onClick={this.props.decrement}>Down</a>
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
