// feature name
export const GAME = '[GAME]';

// action types
export const START_GAME  = `${GAME} START GAME`;
export const SET_PLAYERS  = `${GAME} SET PLAYERS`;
export const SET_STARTING_MONEY  = `${GAME} SET STARTING_MONEY`;
export const SET_SMALL_BLIND_AMOUNT  = `${GAME} SET SMALL_BLIND_AMOUNT`;
export const SET_BIG_BLIND_AMOUNT  = `${GAME} SET BIG_BLIND_AMOUNT`;

// action creators
// command
export const startGame = (payload) => ({
    type: START_GAME,
    payload,
});

// document
export const setPlayers = (players) => ({
    type: SET_PLAYERS,
    payload: { players },
});

export const setStartingMoney = (startingMoney) => ({
    type: SET_STARTING_MONEY,
    payload: { startingMoney },
});

export const setSmallBlindAmount = smallBlindAmount => ({
    type: SET_SMALL_BLIND_AMOUNT,
    payload: { smallBlindAmount },
});

export const setBigBlindAmount = bigBlindAmount => ({
    type: SET_BIG_BLIND_AMOUNT,
    payload: { bigBlindAmount },
});
