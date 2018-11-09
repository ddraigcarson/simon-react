import { createReducer } from "reduxsauce";
import Actions from "../actions/simonActions";

const INITIAL_STATE = {
  count: 0,
};

const increment = (state, action) => {
  return {
    ...state,
    count: action.count,
  };
}

const decrement = state => ({
  ...state,
  count: state.count - 1,
});

const reset = state =>({
  ...state,
  count: 0,
});

const Types = Actions.Types;

const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT]: increment,
  [Types.DECREMENT]: decrement,
  [Types.RESET]: reset,
})

export default reducer;
