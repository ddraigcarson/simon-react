import Game from "../../components/game/Game";
import { connect } from "react-redux";
import { makeCount } from "../../selectors/simon";

import Actions from "../../actions/simon";

const mapStateToProps = store => {
  console.log(store)
  return {
    automated: !store.simon.playersTurn,
    selectedButton: store.sequence.computerSequence[store.sequence.sequencePosition],
  };
};

const actions = {
  playersMove: Actions.Creators.playersMove,
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => {
      dispatch(Actions.Creators.startGame());
    },
    resetGame: () => {
      dispatch(Actions.Creators.resetGame());
    },
  };
};

const GameContainer = connect(mapStateToProps, actions)(Game);

export default GameContainer
