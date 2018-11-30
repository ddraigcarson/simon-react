import {
    SET_PLAYERS,
    SET_STARTING_MONEY,
    SET_SMALL_BLIND_AMOUNT,
    SET_BIG_BLIND_AMOUNT,
} from '../actions/game';
import {createDeck} from '../../utils/deck';

const initialState = {
    players: 0,
    startingMoney: 0,
    smallBlind: 0,
    bigBlind: 0,
    deck: createDeck(), // Dont do this here, do it in its own reducer, that will include hands maybe
};

export const game = (state = initialState, action) => {
    switch (action.type) {

        case SET_PLAYERS:
            return { ...state, players: action.payload.players };

        case SET_STARTING_MONEY:
            return { ...state, startingMoney: action.payload.startingMoney };

        case SET_SMALL_BLIND_AMOUNT:
            return { ...state, smallBlind: action.payload.smallBlindAmount };

        case SET_BIG_BLIND_AMOUNT:
            return { ...state, bigBlind: action.payload.bigBlindAmount };

        default:
            return state;
  }
}
