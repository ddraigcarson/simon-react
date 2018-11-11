import Controls from "../../components/controls/Controls";
import { connect } from "react-redux";
import { makeControls } from "../../selectors/controls";

import Actions from "../../actions/simon";

const mapStateToProps = store => {
  return makeControls(store);
};

const actions = ({
  startRound: Actions.Creators.startRound,
  resetGame: Actions.Creators.resetGame,
});

const ControlContainer = connect(mapStateToProps, actions)(Controls);

export default ControlContainer
