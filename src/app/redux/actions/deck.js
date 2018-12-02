// feature name
export const DECK = '[DECK]';

// action types
export const DRAW_CARD = `${DECK} DRAW_CARD`;
export const SET_HAND = `${DECK} SET HAND`;
export const SET_DECK = `${DECK} SET DECK`;

// action creators
// command

// event
export const drawCard = (player) => ({
    type: DRAW_CARD,
    payload: {player},
});

// document
export const setHand = (player, hand) => ({
  type: SET_HAND,
  payload: {player, hand}
});

export const setDeck = (deck) => ({
  type: SET_DECK,
  payload: {deck},
});
