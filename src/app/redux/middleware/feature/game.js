import {
    START_GAME,
    setPlayers,
    setStartingMoney,
    setSmallBlindAmount,
    setBigBlindAmount,
} from '../../actions/game';

export const gameMiddleWare = () => (next) => (action) => {
  next(action); // next is function dispatch(action) {}
  
  switch (action.type) {

    case START_GAME:
      next([
          setPlayers(action.payload.players),
          setStartingMoney(action.payload.startingMoney),
          setSmallBlindAmount(action.payload.smallBlindAmount),
          setBigBlindAmount(action.payload.smallBlindAmount*2),
      ]);
      break;

    default:
      break;
  }
}
