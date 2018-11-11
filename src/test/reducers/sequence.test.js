import { mockRandom } from 'jest-mock-random';
import reducer from '../../reducers/sequence';
import Actions from '../../actions/simon';

describe('reducers - sequence', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      computerSequence: [],
      playerSequence: [],
      sequenceInProgress: false,
      sequencePosition: 0,
      buttonFlash: false,
    })
  });

  describe('newRound', () => {
    test('should, on the first new round, add to the computer sequence, set the sequence in progress and set a button to flash', () => {
      mockRandom(0.0);
      const initialState = reducer(undefined, {})
      expect(reducer(initialState, { type: Actions.Types.NEW_ROUND })).toEqual({
        computerSequence: ['RED'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: true,
      });
    });

    test('should, on new round, add to the computer sequence, set the sequence in progress, set a button to flash, and remove the players selections', () => {
      mockRandom(0.3);
      const initialState = {
        computerSequence: ['RED'],
        playerSequence: ['RED'],
        sequenceInProgress: false,
        sequencePosition: 1,
        buttonFlash: false,
      }
      expect(reducer(initialState, { type: Actions.Types.NEW_ROUND })).toEqual({
        computerSequence: ['RED', 'YELLOW'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: true,
      })
    });
  });

  describe('computerTurnOffFlash', () => {
    test('should turn off the button flash and not affect anything else', () => {
      const initialState = {
        computerSequence: ['RED', 'YELLOW'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: true,
      };
      expect(reducer(initialState, { type: Actions.Types.COMPUTER_FLASH_OFF })).toEqual({
        computerSequence: ['RED', 'YELLOW'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: false,
      })
    })
  });

  describe('computerNextInSequence', () => {
    test('should move to the next colour in the computers sequence and turn the button flash on', () => {
      const initialState = {
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: false,
      };
      const resultState = reducer(initialState, { type: Actions.Types.COMPUTER_NEXT_IN_SEQ });
      expect(resultState).toEqual({
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 1,
        buttonFlash: true,
      });
      // If done again
      expect(reducer(resultState, { type: Actions.Types.COMPUTER_NEXT_IN_SEQ })).toEqual({
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 2,
        buttonFlash: true,
      });
    });
  });

  describe('playerAddToSequence', () => {
    test('should add the players first selection to the playerSequence', () => {
      const initialState = {
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: [],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: false,
      };
      expect(reducer(initialState, { type: Actions.Types.PLAYER_ADD_TO_SEQ, value: 'RED' })).toEqual({
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: ['RED'],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: false,
      })
    });

    test('should add the players next selection to the playerSequence, not override', () => {
      const initialState = {
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: ['RED'],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: false,
      };
      expect(reducer(initialState, { type: Actions.Types.PLAYER_ADD_TO_SEQ, value: 'YELLOW' })).toEqual({
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: ['RED', 'YELLOW'],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: false,
      })
    });
  });

  describe('playerFinishedSequence', () => {
    test('should end the sequenceInProgress', () => {
      const initialState = {
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: ['RED', 'YELLOW', 'BLUE'],
        sequenceInProgress: true,
        sequencePosition: 0,
        buttonFlash: false,
      };
      expect(reducer(initialState, { type: Actions.Types.PLAYER_FINISHED_SEQ })).toEqual({
        computerSequence: ['RED', 'YELLOW', 'BLUE'],
        playerSequence: ['RED', 'YELLOW', 'BLUE'],
        sequenceInProgress: false,
        sequencePosition: 0,
        buttonFlash: false,
      })
    });    
  });

});
