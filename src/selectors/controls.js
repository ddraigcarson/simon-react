import { createSelector } from 'reselect';
import { getLost, getGameInProgress } from './simon';
import { getSequenceInProgress } from './sequence';

export const makeControls = createSelector(
  [
    getSequenceInProgress,
    getLost,
    getGameInProgress,
  ],
  (sequenceInProgress, gameLost, gameInProgress) => {
    let startRoundDisabled;
    let resetGameDisabled;

    if (gameLost) {
      startRoundDisabled = true;
      resetGameDisabled = false;
    } else if (sequenceInProgress) {
      startRoundDisabled = true;
      resetGameDisabled = true;
    } else if (!gameInProgress) {
      startRoundDisabled = false;
      resetGameDisabled = false;
    } else {
      startRoundDisabled = false;
      resetGameDisabled = false;
    }

    return {
      startRoundDisabled,
      resetGameDisabled,
    }
  }
)
