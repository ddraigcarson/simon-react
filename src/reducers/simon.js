import { createReducer } from 'reduxsauce';
import Actions from '../actions/simon';

const INITIAL_STATE = {
  gameInProgress: false,
  gameLost: false,
  round: 0,
  playersTurn: false,
};

const newRound = (state, action) => ({
  ...state,
  gameInProgress: true,
  round: state.round + 1,
  playersTurn: false,
});

const playersTurn = (state, action) => ({
  ...state,
  playersTurn: true,
});

const playerLost = (state, action) => ({
  ...state,
  gameInProgress: false,
  gameLost: true,
});

const resetGame = state => (INITIAL_STATE);

const Types = Actions.Types;

const reducer = createReducer(INITIAL_STATE, {
  [Types.NEW_ROUND]: newRound,
  [Types.PLAYERS_TURN]: playersTurn,
  [Types.PLAYER_LOST]: playerLost,
  [Types.RESET_GAME]: resetGame,
})

export default reducer;
