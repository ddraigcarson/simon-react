import { UPDATE_COMPUTER_SEQUENCE } from '../actions/sequences';
import _ from 'lodash';

const initialState = {
  computerSequence: [],
  playerSequence: [],
  sequencePosition: 0,
};

export const sequenceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPUTER_SEQUENCE:
      return {
        ...state,
        computerSequence: _.concat(state.computerSequence, [action.payload]),
      }
    default:
      return state;
  }
}
