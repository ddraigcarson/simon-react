import { createSelector } from "reselect";

export const getSequenceInProgress = (state) => state.sequence.sequenceInProgress;

export const getSequencePosition = (state) => state.sequence.sequencePosition;

export const getPlayerSequence = (state) => state.sequence.playerSequence;

export const getComputerSequence = (state) => state.sequence.computerSequence;

export const makePlayersLastMoveResult = createSelector(
  [
    getPlayerSequence,
    getComputerSequence,
    getSequencePosition
  ],
  (playerSequence, computerSequence, sequencePosition) => {
    const lastMove = sequencePosition - 1;
    const lastMoveResult = { lost: false, suceeded: false }
    if (playerSequence[lastMove] !== computerSequence[lastMove]) {
      // Player Lost
      lastMoveResult.lost = true;
    } else if (sequencePosition === computerSequence.length) {
      // End of sequence
      lastMoveResult.suceeded = true;
    }
    return lastMoveResult;
  }
);
