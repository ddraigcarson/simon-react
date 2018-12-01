// feature name
export const ROUND = '[ROUND]';

// action types
export const SET_ROUND = `${ROUND} SET ROUND`;
export const SET_STAGE = `${ROUND} SET STAGE`;
export const SET_DEALER = `${ROUND} SET DEALER`;
export const SET_SMALL_BLIND = `${ROUND} SET SMALL_BLIND`;
export const SET_BIG_BLIND = `${ROUND} SET BIG_BLIND`;
export const BEGIN_BLINDS = `${ROUND} BEGIN BLINDS`;

// action creators
// command

// event
export const beginBlinds = () => ({
    type: BEGIN_BLINDS,
    payload: { test: 1},
});

// document
export const setRound = (round) => ({
    type: SET_ROUND,
    payload: {round},
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
