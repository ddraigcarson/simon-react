import { combineReducers } from "redux";

import count from "./counter";

export default combineReducers({ simon: count });
