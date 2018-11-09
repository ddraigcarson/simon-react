import { combineReducers } from "redux";

import count from "./counter";
import simon from "./simon";

export default combineReducers({
  count: count,
  simon,
});
