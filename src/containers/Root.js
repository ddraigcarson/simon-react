import Root from "../components/Root";
import { connect } from "react-redux";

import Actions from "../actions/simonActions";

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(Actions.Creators.increment(6));
    },
    decrement: () => {
      dispatch(Actions.Creators.decrement());
    },
    resetCount: payload => {
      dispatch(Actions.Creators.reset());
    }
  };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer
