import { makeScore } from '../../selectors/score';
import * as labels from '../../locales/labels';

describe('selectors - score', () => {
  // gameLost, round, computersTurn, sequenceInProgress
  test('makeScore should return \'Game Over\' if the player lost', () => {
    expect(makeScore.resultFunc(true, 1, false, true)).toEqual({ round: 1, gameStateMessage: labels.GAME_LOST});
  })

  test('makeScore should return \'Go!\' if its the players turn and the sequence is in progress', () => {
    expect(makeScore.resultFunc(false, 1, false, true)).toEqual({ round: 1, gameStateMessage: labels.PLAYERS_TURN});
  })

  test('makeScore should return \'Watch\' if its the computers turn and the sequence is running', () => {
    expect(makeScore.resultFunc(false, 1, true, true)).toEqual({ round: 1, gameStateMessage: labels.COMPUTERS_TURN});
  })

  test('makeScore should return \'Ready\' if its the players turn and the sequence is not running', () => {
    expect(makeScore.resultFunc(false, 1, false, false)).toEqual({ round: 1, gameStateMessage: labels.ROUND_READY});
  })
});
