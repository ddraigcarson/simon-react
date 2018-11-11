import { createSelector } from "reselect";
import * as simon from "./simon";
import * as sequence from "./sequence";
import * as labels from "../locales/labels"

export const makeScore = createSelector(
  [
    simon.getLost,
    simon.getRound,
    simon.getComputersTurn,
    sequence.getSequenceInProgress,
  ],
  (gameLost, round, computersTurn, sequenceInProgress) => {
    let gameStateMessage;
    if (gameLost) {
      gameStateMessage = labels.GAME_LOST; // Game lost
    } else if (computersTurn && sequenceInProgress) {
      gameStateMessage = labels.COMPUTERS_TURN; // Watch
    } else if (!computersTurn && sequenceInProgress) {
      gameStateMessage = labels.PLAYERS_TURN; // Go!
    } else  {
      gameStateMessage = labels.ROUND_READY; // Ready?
    }

    return {
      round,
      gameStateMessage,
    }
  }
)
