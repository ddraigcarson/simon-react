import { combineReducers } from 'redux';

import simon from './simon';
import sequence from './sequence';

export default combineReducers({
  simon,
  sequence
});
