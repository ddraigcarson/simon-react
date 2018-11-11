import reducer from '../../reducers/simon';
import Actions from '../../actions/simon';

describe('reducers - simon', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      gameInProgress: false,
      gameLost: false,
      round: 0,
      playersTurn: false,
    })
  });

  describe('newRound', () => {
    test('should set the game in progress, increment the round and set it to the computers turn', () => {
      const initialState = reducer(undefined, {})
      expect(reducer(initialState, { type: Actions.Types.NEW_ROUND })).toEqual({
        gameInProgress: true,
        gameLost: false,
        round: 1,
        playersTurn: false,
      });
    });

    test('should, if run again, increment the round and set it to the computers turn', () => {
      const initialState = {
        gameInProgress: true,
        gameLost: false,
        round: 1,
        playersTurn: false,
      };
      expect(reducer(initialState, { type: Actions.Types.NEW_ROUND })).toEqual({
        gameInProgress: true,
        gameLost: false,
        round: 2,
        playersTurn: false,
      });
    });
  });

  describe('playersTurn', () => {
    test('should set it to the players turn', () => {
      const initialState = {
        gameInProgress: true,
        gameLost: false,
        round: 1,
        playersTurn: false,
      };
      expect(reducer(initialState, { type: Actions.Types.PLAYERS_TURN })).toEqual({
        gameInProgress: true,
        gameLost: false,
        round: 1,
        playersTurn: true,
      });
    })
  })

  describe('playerLost', () => {
    test('should end the game and set the game to lost', () => {
      const initialState = {
        gameInProgress: true,
        gameLost: false,
        round: 1,
        playersTurn: true,
      };
      expect(reducer(initialState, { type: Actions.Types.PLAYER_LOST })).toEqual({
        gameInProgress: false,
        gameLost: true,
        round: 1,
        playersTurn: true,
      });
    })
  })

  describe('resetGame', () => {
    test('should set the state back to its initial state', () => {
      const initialState = {
        gameInProgress: true,
        gameLost: false,
        round: 1,
        playersTurn: true,
      };
      expect(reducer(initialState, { type: Actions.Types.RESET_GAME })).toEqual({
        gameInProgress: false,
        gameLost: false,
        round: 0,
        playersTurn: false,
      });
    })
  })

});
