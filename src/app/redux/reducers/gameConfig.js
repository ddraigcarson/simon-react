import { UPDATE_PLAYERS, UPDATE_STARTING_MONEY } from '../actions/gameConfig';

const initialState = {
  players: 0,
  startingMoney: 0,
};

export const gameConfigReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_PLAYERS:
      return { ...state, players: action.payload };

    case UPDATE_STARTING_MONEY:
      return { ...state, startingMoney: action.payload };

    default:
      return state;
  }
}
