export const selectDeck = state => state.deck.current;

export const selectPlayerHand = (state, player) => state.deck.hands[player] || [];
