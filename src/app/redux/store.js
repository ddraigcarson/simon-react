import {applyMiddleware, combineReducers, createStore} from 'redux';

// reducers
import {game}  from './reducers/game';
import {round}  from './reducers/round';
import {players}  from './reducers/players';

// feature middleware
import {gameMiddleWare}  from './middleware/feature/game';
import {roundMiddleWare}  from './middleware/feature/round';
import {playersMiddleWare}  from './middleware/feature/players';

// core middleware
import {actionSplitterMiddleware}  from './middleware/core/actionSplitter';
import {loggerMiddleware}  from './middleware/core/logger';

const rootReducer = combineReducers({
    game,
    players,
    round,
});

const featureMiddleware = [
    roundMiddleWare,
    playersMiddleWare,
    gameMiddleWare,
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
