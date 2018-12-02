import {SET_PLAYERS, SET_PLAYERS_BALANCE} from '../actions/players'

const initialState = {};

export const players = (state = initialState, action) => {
    switch (action.type) {

        case SET_PLAYERS:
            return action.payload.players;

        case SET_PLAYERS_BALANCE:
            return {
                ...state,
                [action.payload.player]: {...state[action.payload.player], balance: action.payload.balance},
            };

        default:
            return state;
    }
};
