import Game from '../../components/game/Game';
import { connect } from 'react-redux';

import Actions from '../../actions/simon';
import makeGame from '../../selectors/game';

const mapStateToProps = store => {
  return makeGame(store);
};

const actions = {
  playersMove: Actions.Creators.playersMove,
}

const GameContainer = connect(mapStateToProps, actions)(Game);

export default GameContainer
