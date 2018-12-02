import {applyMiddleware, combineReducers, createStore, compose} from 'redux';

// reducers
import {game}  from './reducers/game';
import {round}  from './reducers/round';
import {players}  from './reducers/players';
import {deck}  from './reducers/deck';

// feature middleware
import {gameMiddleWare}  from './middleware/feature/game';
import {roundMiddleWare}  from './middleware/feature/round';
import {playersMiddleWare}  from './middleware/feature/players';
import {deckMiddleWare}  from './middleware/feature/deck';

// core middleware
import {actionSplitterMiddleware}  from './middleware/core/actionSplitter';
import {loggerMiddleware}  from './middleware/core/logger';

const rootReducer = combineReducers({
    round,
    players,
    game,
    deck,
});

const featureMiddleware = [
  gameMiddleWare,
  roundMiddleWare,
  playersMiddleWare,
  deckMiddleWare,
];

const coreMiddleware = [
  actionSplitterMiddleware,
  loggerMiddleware,
];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...featureMiddleware, ...coreMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
