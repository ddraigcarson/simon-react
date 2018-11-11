import { combineReducers } from "redux";

import count from "./counter";
import simon from "./simon";
import sequence from "./sequence";

export default combineReducers({
  count: count,
  simon,
  sequence
});
