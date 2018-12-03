import {
    SET_ROUND,
    SET_POT,
    SET_STAGE,
    SET_DEALER,
    SET_SMALL_BLIND,
    SET_BIG_BLIND,
    SET_CURRENT_PLAYER,
    SET_DECK,
    SET_HAND,
    SET_PLAYER_STATE,
    SET_BET,
} from '../actions/round';
import {createDeck} from "../../utils/deck";

const initialState = {
    round: 1,
    pot: 0,
    stage: undefined,
    deck: createDeck(),
    dealer: undefined,
    smallBlind: undefined,
    bigBlind: undefined,
    currentPlayer: undefined,
    playerStates: {},
    hands: {},
    bets: {},
};

export const round = (state = initialState, action) => {
    switch (action.type) {

        case SET_ROUND:
            return { ...state, round: action.payload.round };

        case SET_POT:
            return { ...state, pot: action.payload.pot };

        case SET_STAGE:
            return { ...state, stage: action.payload.stage };

        case SET_DEALER:
            return { ...state, dealer: action.payload.player };

        case SET_SMALL_BLIND:
            return { ...state, smallBlind: action.payload.player };

        case SET_BIG_BLIND:
            return { ...state, bigBlind: action.payload.player };

        case SET_CURRENT_PLAYER:
            return { ...state, currentPlayer: action.payload.player };

        case SET_DECK:
            return { ...state, deck: action.payload.deck };

        case SET_PLAYER_STATE:
            return { ...state, playerStates: { ...state.playerStates, [action.payload.player]: action.payload.state } };

        case SET_HAND:
            return { ...state, hands: { ...state.hands, [action.payload.player]: action.payload.hand } };

        case SET_BET:
            return { ...state, bets: { ...state.bets, [action.payload.player]: action.payload.bet } };

        default:
            return state;
  }
}
