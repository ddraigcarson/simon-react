import { createActions } from "reduxsauce";
import { makePlayersLastMoveResult } from "../selectors/sequence"

const dispatchWithDelay = (dispatch, action, delay) => {
  setTimeout(() => {
    dispatch(action);
  }, delay);
}

const Types = {
  NEW_ROUND: "NEW_ROUND",
  PLAYERS_TURN: "PLAYERS_TURN",
  PLAYER_WON: "PLAYER_WON",
  PLAYER_LOST: "PLAYER_LOST",
  RESET_GAME: "RESET_GAME",
  COMPUTER_SEQ_START: "COMPUTER_SEQ_START",
  COMPUTER_NEXT_IN_SEQ: "COMPUTER_NEXT_IN_SEQ",
  COMPUTER_FLASH_OFF: "COMPUTER_FLASH_OFF",
  PLAYER_ADD_TO_SEQ: "PLAYER_ADD_TO_SEQ",
  PLAYER_FINISHED_SEQ: "PLAYER_FINISHED_SEQ",
  PLAYER_SEQ_START: "PLAYER_SEQ_START",
  PLAYER_NEXT_IN_SEQ: "PLAYER_NEXT_IN_SEQ",
};

const resetGame = () => dispatch => {
  dispatch({type: Types.RESET_GAME});
}

const startRound = () => (dispatch, getState) => {
  dispatch({type: Types.NEW_ROUND});

  const { computerSequence } = getState().sequence;
  computerSequence.map((o,i) => {
    dispatchWithDelay(dispatch, {type: Types.COMPUTER_NEXT_IN_SEQ}, (i+1)*1000);
    dispatchWithDelay(dispatch, {type: Types.COMPUTER_FLASH_OFF}, (i+1)*1000+500);
  });
  dispatchWithDelay(dispatch, { type: Types.PLAYERS_TURN }, computerSequence.length*1000);
  dispatchWithDelay(dispatch, { type: Types.PLAYER_SEQ_START }, computerSequence.length*1000);
}

const playersMove = (buttonId) => (dispatch, getState) => {
  const state = getState();
  const computerSequence = state.sequence.computerSequence;
  const playerSequence = state.sequence.playerSequence;

  if (computerSequence[playerSequence.length] !== buttonId) {
    dispatch({ type: Types.PLAYER_ADD_TO_SEQ, value: buttonId });
    dispatch({ type: Types.PLAYER_LOST });
  } else if (computerSequence[playerSequence.length] === buttonId  && playerSequence.length === computerSequence.length-1) {
    dispatch({ type: Types.PLAYER_ADD_TO_SEQ, value: buttonId });
    dispatch({ type: Types.PLAYER_FINISHED_SEQ });
  } else {
    dispatch({ type: Types.PLAYER_ADD_TO_SEQ, value: buttonId });
  }
}

const Creators = {
  startRound,
  playersMove,
  resetGame
}

const Actions = {
  Types,
  Creators
};

export default Actions;
