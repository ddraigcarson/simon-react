import { createSelector } from 'reselect';
import { getComputersTurn, getGameInProgress } from './simon';
import { getSequencePosition, getComputerSequence, getButtonFlash } from './sequence';

const makeGame = createSelector(
  [
    getComputersTurn,
    getSequencePosition,
    getComputerSequence,
    getButtonFlash,
  ],
  (computersTurn, sequencePosition, computerSequence, buttonFlash) => {
    return {
      automated: computersTurn,
      selectedButton: computersTurn && buttonFlash ? computerSequence[sequencePosition] : '',
    }
  }
)

export default makeGame;
