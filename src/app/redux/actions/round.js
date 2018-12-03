// feature name
export const ROUND = '[ROUND]';

// action types
export const SET_ROUND = `${ROUND} SET ROUND`;
export const SET_POT = `${ROUND} SET POT`;
export const SET_STAGE = `${ROUND} SET STAGE`;
export const SET_DEALER = `${ROUND} SET DEALER`;
export const SET_SMALL_BLIND = `${ROUND} SET SMALL_BLIND`;
export const SET_BIG_BLIND = `${ROUND} SET BIG_BLIND`;
export const SET_CURRENT_PLAYER = `${ROUND} SET CURRENT_PLAYER`;
export const SET_HAND = `${ROUND} SET HAND`;
export const SET_DECK = `${ROUND} SET DECK`;
export const SET_PLAYER_STATE = `${ROUND} SET PLAYER_STATE`;
export const SET_BET = `${ROUND} SET BET`;

export const START_STAGE = `${ROUND} START STAGE`;
export const DRAW_CARD = `${ROUND} DRAW_CARD`;
export const CALL = `${ROUND} CALL`;
export const FOLD = `${ROUND} FOLD`;
export const RAISE = `${ROUND} RAISE`;


// action creators
// command

// event
export const startStage = (stage) => ({
  type: START_STAGE,
  payload: {stage},
});

export const drawCard = (player) => ({
    type: DRAW_CARD,
    payload: {player},
});

export const callBet = (player) => ({
    type: CALL,
    payload: {player},
});

export const fold = (player) => ({
    type: FOLD,
    payload: {player},
});

export const raise = (player, amount) => ({
    type: RAISE,
    payload: {player, amount},
});

// document
export const setRound = (round) => ({
    type: SET_ROUND,
    payload: {round},
});

export const setPot = (pot) => ({
    type: SET_POT,
    payload: {pot},
});

export const setStage = (stage) => ({
    type: SET_STAGE,
    payload: {stage},
});

export const setDealer = (player) => ({
    type: SET_DEALER,
    payload: {player}
});

export const setSmallBlind = (player) => ({
    type: SET_SMALL_BLIND,
    payload: {player}
});

export const setBigBlind = (player) => ({
    type: SET_BIG_BLIND,
    payload: {player}
});

export const setCurrentPlayer = (player) => ({
    type: SET_CURRENT_PLAYER,
    payload: {player}
});

export const setDeck = (deck) => ({
    type: SET_DECK,
    payload: {deck},
});

export const setHand = (player, hand) => ({
    type: SET_HAND,
    payload: {player, hand}
});

export const setPlayerState = (player, state) => ({
    type: SET_PLAYER_STATE,
    payload: {player, state}
});

export const setBet = (player, bet) => ({
    type: SET_BET,
    payload: {player, bet}
});
