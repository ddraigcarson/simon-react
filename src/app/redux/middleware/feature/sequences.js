import { START_COMPUTER_TURN, updateComputerSequence } from '../../actions/sequences';
import { getRandomButton } from '../../../utils/sequenceUtils';

export const sequencesMiddleWare = () => (next) => (action) => {
  next(action); // next is function dispatch(action) {}

  switch (action.type) {

    case START_COMPUTER_TURN:
      next([
        updateComputerSequence(getRandomButton())
      ])
      break;
      
    default:
      break;
  }
}
