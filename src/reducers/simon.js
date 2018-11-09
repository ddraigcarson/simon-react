import { createReducer } from "reduxsauce";
import Actions from "../actions/simon";

const INITIAL_STATE = {
  gameInProgress: false,
  gameWon: false,
  gameLost: false,
};

const setGameInProgress = (state, action) => ({
  ...state,
  gameInProgress: action.value,
})

const setGameWon = (state, action) => ({
  ...state,
  gameWon: action.value,
});

const setGameLost = (state, action) => ({
  ...state,
  gameLost: action.value,
});

const reset = state => (INITIAL_STATE);

const Types = Actions.Types;

const reducer = createReducer(INITIAL_STATE, {
  [Types.GAME_IN_PROGRESS]: setGameInProgress,
  [Types.GAME_WON]: setGameWon,
  [Types.GAME_LOST]: setGameLost,
  [Types.RESET]: reset,
})

export default reducer;
