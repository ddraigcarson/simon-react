// feature name
export const GAME_CONFIG = '[GAME_CONFIG]';

// action types
export const START_GAME  = `${GAME_CONFIG} START GAME`;
export const UPDATE_PLAYERS  = `${GAME_CONFIG} UPDATE PLAYERS`;
export const UPDATE_STARTING_MONEY  = `${GAME_CONFIG} UPDATE STARTING MONEY`;

// action creators
// command
export const startGame = (payload) => ({
  type: START_GAME,
  payload,
});

// document
export const updatePlayers = (value) => ({
  type: UPDATE_PLAYERS,
  payload: value,
});

export const updateStartingMoney = (value) => ({
  type: UPDATE_STARTING_MONEY,
  payload: value,
});
