import {SET_HAND, SET_DECK} from '../actions/deck';
import {createDeck} from '../../utils/deck';

const initialState = {
    current: createDeck(),
    hands: {},
};

export const deck = (state = initialState, action) => {
    switch (action.type) {

        case SET_DECK:
            return { ...state, current: action.payload.deck };

        case SET_HAND:
            return { ...state, hands: { ...state.hands, [action.payload.player]: action.payload.hand } };

        default:
            return state;
  }
}
