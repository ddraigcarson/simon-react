// feature name
export const SEQUENCES = '[SEQUENCES]';

// action types
export const START_COMPUTER_TURN  = `${SEQUENCES} START COMPUTER TURN`;
export const UPDATE_COMPUTER_SEQUENCE  = `${SEQUENCES} UPDATE COMPUTER SEQUENCE`;

// action creators
// command
export const startComputerTurn = () => ({
  type: START_COMPUTER_TURN,
});

// document
export const updateComputerSequence = (value) => ({
  type: UPDATE_COMPUTER_SEQUENCE,
  payload: value,
});
