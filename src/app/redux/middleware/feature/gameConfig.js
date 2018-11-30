import { START_GAME, updatePlayers, updateStartingMoney } from '../../actions/gameConfig';

export const gameConfigMiddleWare = () => (next) => (action) => {
  next(action); // next is function dispatch(action) {}

  switch (action.type) {

    case START_GAME:
      next([
        updatePlayers(action.payload.players),
        updateStartingMoney(action.payload.startingMoney),
      ]);
      break;

    default:
      break;
  }
}
