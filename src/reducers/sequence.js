import { createReducer } from "reduxsauce";
import { addToSequence, addRandomToSequence } from "../utils/sequenceUtils"
import Actions from "../actions/simon";

const INITIAL_STATE = {
  computerSequence: [],
  playerSequence: [],
  sequenceInProgress: false,
  sequencePosition: 0,
  buttonFlash: false,
};

const newRound = (state, action) => ({
  ...state,
  computerSequence: addRandomToSequence(state.computerSequence),
  playerSequence: [],
  sequenceInProgress: true,
  sequencePosition: 0,
  buttonFlash: true,
});

const computerNextInSequence = (state, action) => ({
  ...state,
  sequencePosition: state.sequencePosition + 1,
  buttonFlash: true,
});

const computerTurnOffFlash = (state, action) => ({
  ...state,
  buttonFlash: false,
});

const playerAddToSequence = (state, action) => ({
  ...state,
  playerSequence: addToSequence(state.playerSequence, action.value),
})

const playerFinishedSequence = (state, action) => ({
  ...state,
  sequenceInProgress: false,
});

const resetGame = state => (INITIAL_STATE);

const Types = Actions.Types;
const reducer = createReducer(INITIAL_STATE, {
  [Types.NEW_ROUND]: newRound,
  [Types.COMPUTER_NEXT_IN_SEQ]: computerNextInSequence,
  [Types.COMPUTER_FLASH_OFF]: computerTurnOffFlash,
  [Types.PLAYER_ADD_TO_SEQ]: playerAddToSequence,
  [Types.PLAYER_FINISHED_SEQ]: playerFinishedSequence,
  [Types.RESET_GAME]: resetGame,
})

export default reducer;
