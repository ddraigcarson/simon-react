import _ from 'lodash';

export const selectCurrentStage = state => state.round.stage;
export const selectPot = state => state.round.pot;

export const selectDealer = state => state.round.dealer;
export const selectSmallBlind = state => state.round.smallBlind;
export const selectBigBlind = state => state.round.bigBlind;

export const selectDeck = state => state.round.deck;
export const selectPlayerHand = (state, player) => state.round.hands[player] || [];
export const selectPlayerBet = (state, player) => state.round.bets[player] || 0;

export const selectCurrentBet = state => {
    const bets = Object.values(state.round.bets);
    return _.max(bets);
}