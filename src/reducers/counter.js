import actionTypes from "../actions/actionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
  case actionTypes.INCREMENT_NUM: 
    return state + 1;
  case actionTypes.DECREMENT_NUM:
    return state - 1;
  case actionTypes.RESET:
    return state = action.payload;
  }

  return state;
}