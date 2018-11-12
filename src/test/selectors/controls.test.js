import { makeControls } from '../../selectors/controls';
import * as labels from '../../locales/labels';

describe('selectors - controls', () => {
  // sequenceInProgress, gameLost, gameInProgress
  // Done
  test('makeControls should be completely enabled before the first round', () => {
    expect(makeControls.resultFunc(false, false, false)).toEqual({ startRoundDisabled: false, resetGameDisabled: false });
    expect(makeControls.resultFunc(false, false, false)).toEqual({ startRoundDisabled: false, resetGameDisabled: false });
  });

  // Done
  test('makeControls should be completely disabled during computers turn', () => {
    expect(makeControls.resultFunc(true, false, true)).toEqual({ startRoundDisabled: true, resetGameDisabled: true });
    expect(makeControls.resultFunc(true, false, false)).toEqual({ startRoundDisabled: true, resetGameDisabled: true });
  });

  // Done
  test('makeControls should be completely disabled while the player is selecting their sequence', () => {
    expect(makeControls.resultFunc(true, false, false)).toEqual({ startRoundDisabled: true, resetGameDisabled: true });
    expect(makeControls.resultFunc(true, false, true)).toEqual({ startRoundDisabled: true, resetGameDisabled: true });
  });

  test('makeControls should be completely enabled if the player has made the correct sequence and is ready for the next round', () => {
    expect(makeControls.resultFunc(false, false, true)).toEqual({ startRoundDisabled: false, resetGameDisabled: false });
  });

  test('makeControls, resetGame should be enabled and startRound disabled if the player hasnt made a selection', () => {
    expect(makeControls.resultFunc(false, true, false)).toEqual({ startRoundDisabled: true, resetGameDisabled: false });
    expect(makeControls.resultFunc(false, true, true)).toEqual({ startRoundDisabled: true, resetGameDisabled: false });
  });

  // Done
  test('makeControls, resetGame should be enabled and startRound disabled if the player lost', () => {
    expect(makeControls.resultFunc(false, true, false)).toEqual({ startRoundDisabled: true, resetGameDisabled: false });
    expect(makeControls.resultFunc(false, true, true)).toEqual({ startRoundDisabled: true, resetGameDisabled: false });
  });
});
