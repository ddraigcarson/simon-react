import {
    SET_ROUND,
    SET_STAGE,
    SET_DEALER,
} from '../actions/round';

const initialState = {
    round: 0,
    stage: undefined,
    dealer: undefined,
};

export const round = (state = initialState, action) => {
    switch (action.type) {

        case SET_ROUND:
            return { ...state, round: action.payload.round };

        case SET_STAGE:
            return { ...state, stage: action.payload.stage };

        case SET_DEALER:
            return { ...state, dealer: action.payload.player };

        default:
            return state;
  }
}
