import {applyMiddleware, combineReducers, createStore} from 'redux';

import {gameConfigReducer}  from './reducers/gameConfig';
import {sequenceReducer}  from './reducers/sequences';
import {gameConfigMiddleWare}  from './middleware/feature/gameConfig';
import {sequencesMiddleWare}  from './middleware/feature/sequences';
import {actionSplitterMiddleware}  from './middleware/core/actionSplitter';
import {loggerMiddleware}  from './middleware/core/logger';

const rootReducer = combineReducers({
  gameConfigReducer,
  sequenceReducer,
});

const featureMiddleware = [
  sequencesMiddleWare,
  gameConfigMiddleWare,
];

const coreMiddleware = [
  actionSplitterMiddleware,
  loggerMiddleware,
];

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
);
