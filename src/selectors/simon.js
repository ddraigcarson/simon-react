export const getGameInProgress = (state) => state.simon.gameInProgress;

export const getLost = (state) => state.simon.gameLost;

export const getRound = (state) => state.simon.round;

export const getComputersTurn = (state) => !state.simon.playersTurn;
