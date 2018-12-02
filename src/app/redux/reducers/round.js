import {
    SET_ROUND,
    SET_STAGE,
    SET_DEALER,
    SET_SMALL_BLIND,
    SET_BIG_BLIND,
    SET_CURRENT_PLAYER,
} from '../actions/round';

const initialState = {
    round: 1,
    stage: undefined,
    dealer: undefined,
    smallBlind: undefined,
    bigBlind: undefined,
    currentPlayer: undefined,
};

export const round = (state = initialState, action) => {
    switch (action.type) {

        case SET_ROUND:
            return { ...state, round: action.payload.round };

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

        default:
            return state;
  }
}
