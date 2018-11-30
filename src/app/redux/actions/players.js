// feature name
export const PLAYERS = '[PLAYERS]';

// action types
export const SET_PLAYERS = `${PLAYERS} SET PLAYERS`;
export const SET_PLAYERS_BALANCE = `${PLAYERS} SET PLAYERS_BALANCE`;
export const MAKE_BET = `${PLAYERS} MAKE BET`;

// action creators

// event
export const makeBet = (player, amount) => ({
    type: MAKE_BET,
    payload: { player, amount },
});

// document
export const setPlayers = players => ({
    type: SET_PLAYERS,
    payload: { players },
});

export const setPlayerBalance = (player, balance) => ({
    type: SET_PLAYERS_BALANCE,
    payload: { player, balance },
});