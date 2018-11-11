import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Actions from '../../actions/simon';
import simon from '../../reducers/simon';
import sequence from '../../reducers/sequence';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions - simon', () => {

  describe('resetGame', () => {
    test('should dispatch only one event of type RESET_GAME', () => {
      const expectedActions = [{type: Actions.Types.RESET_GAME}];
      const store = mockStore({});
      store.dispatch(Actions.Creators.resetGame());
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
/*
  describe('startRound', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        simon: simon(undefined, {}),
        sequence: sequence(undefined, {}),
      };
    })
    // We are only testing what actions are dispatched here, not how they modify the state;
    // Modifying the initial state to simulate NEW_ROUND adding a light to the computerSequence;
    test('should, on the first round, dispatch a new round event and two actions to flash the first light in the sequence', () => {
      jest.useFakeTimers();
      initialState.sequence.computerSequence = ["RED"];
      const expectedActions = [
        { type: Actions.Types.NEW_ROUND },
        { type: Actions.Types.COMPUTER_NEXT_IN_SEQ },
        { type: Actions.Types.COMPUTER_FLASH_OFF },
        { type: Actions.Types.PLAYERS_TURN },
      ];
      const store = mockStore(initialState);
      store.dispatch(Actions.Creators.startRound());
      const actions = store.getActions();
      expect(actions.length).toEqual(expectedActions.length);
      expect(actions).toEqual(expectedActions);
    })
  });
*/

  describe('playersTurn', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        simon: simon(undefined, {}),
        sequence: sequence(undefined, {}),
      };
    });

    test('should, when the wrong button is pressed, add the light, but end the game with a loss', () => {
      const expectedActions = [
        { type: Actions.Types.PLAYER_ADD_TO_SEQ, value: 'RED' },
        { type: Actions.Types.PLAYER_LOST },
      ];

      initialState.sequence.computerSequence = ['BLUE'];
      initialState.sequence.playerSequence = ['RED'];
      const store = mockStore(initialState);

      store.dispatch(Actions.Creators.playersMove('RED'));
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });

    test('should, when the right button is pressed for the last light in the sequence, the light is added, and the next round is readied', () => {
      const expectedActions = [
        { type: Actions.Types.PLAYER_ADD_TO_SEQ, value: 'BLUE' },
        { type: Actions.Types.PLAYER_FINISHED_SEQ },
      ];

      initialState.sequence.computerSequence = ['BLUE'];
      initialState.sequence.playerSequence = [];
      const store = mockStore(initialState);

      store.dispatch(Actions.Creators.playersMove('BLUE'));
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });

    test('should, when the right button is pressed for anything but the last light in the sequence, the light is added, and the user can keep going', () => {
      const expectedActions = [
        { type: Actions.Types.PLAYER_ADD_TO_SEQ, value: 'RED' },
      ];

      initialState.sequence.computerSequence = ['BLUE', 'RED', 'YELLOW'];
      initialState.sequence.playerSequence = ['BLUE'];
      const store = mockStore(initialState);

      store.dispatch(Actions.Creators.playersMove('RED'));
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });





  });

/*
  it('should lose the game if the wrong button is picked', () => {
    const expectedActions = [
      { type: Actions.Types.PLAYER_NEXT_IN_SEQ, value: 'RED' },
      { type: Actions.Types.PLAYER_LOST }
    ];
    const store = mockStore({
      sequence: {
        sequencePosition: 1,
        playerSequence: [],
        computerSequence: ['BLUE'],
      }
    });

    store.dispatch(Actions.Creators.playersMove('RED'));
    const actions = store.getActions();
    expect(actions.length).toEqual(2);
    expect(actions).toEqual(expectedActions);
  })*/
});
