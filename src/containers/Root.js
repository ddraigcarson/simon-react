import React, { Component } from "react";
import Root from "../components/Root";
import { connect } from "react-redux";

import * as actions from "../actions/appActions";

const mapStateToProps = store => {
  return {
    testProp: store.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(actions.incrementNum());
    },
    decrement: () => {
      dispatch(actions.decrementNum());
    },
    resetCount: payload => {
      dispatch(actions.resetCounter(payload));
    }
  };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer
