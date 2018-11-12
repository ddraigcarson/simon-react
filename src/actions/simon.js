import { getPlayerSequence, getComputerSequence } from '../selectors/sequence';

const Types = {
  NEW_ROUND: 'NEW_ROUND',
  PLAYERS_TURN: 'PLAYERS_TURN',
  PLAYER_LOST: 'PLAYER_LOST',
  RESET_GAME: 'RESET_GAME',
  COMPUTER_NEXT_IN_SEQ: 'COMPUTER_NEXT_IN_SEQ',
  COMPUTER_FLASH_OFF: 'COMPUTER_FLASH_OFF',
  PLAYER_ADD_TO_SEQ: 'PLAYER_ADD_TO_SEQ',
  PLAYER_FINISHED_SEQ: 'PLAYER_FINISHED_SEQ',
};

const dispatchPromise =(dispatch, action) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(action)
      resolve()
    }, 500)
  })
}

const resetGame = () => dispatch => {
  dispatch({type: Types.RESET_GAME});
}

const startRound = () => async (dispatch, getState) => {
  dispatch({type: Types.NEW_ROUND});
  const computerSequence = getComputerSequence(getState());
  for (let i=0 ; i<computerSequence.length ; i++) {
    await dispatchPromise(dispatch, { type: Types.COMPUTER_FLASH_OFF });
    await dispatchPromise(dispatch, { type: Types.COMPUTER_NEXT_IN_SEQ });
  }
  dispatch({type: Types.PLAYERS_TURN});
}

const playersMove = (buttonId) => (dispatch, getState) => {
  const state = getState();
  const computerSequence = getComputerSequence(getState());
  const playerSequence = getPlayerSequence(getState());

  const isGameLost = computerSequence[playerSequence.length] !== buttonId;
  const isSequenceComplete = computerSequence[playerSequence.length] === buttonId && playerSequence.length === computerSequence.length-1;

  if (isGameLost) {
    dispatch({ type: Types.PLAYER_ADD_TO_SEQ, value: buttonId });
    dispatch({ type: Types.PLAYER_LOST });
  } else if (isSequenceComplete) {
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
