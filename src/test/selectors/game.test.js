import makeGame from '../../selectors/game';

describe('selectors - game', () => {
  // computersTurn, sequencePosition, computerSequence, buttonFlash
  test('makeGame should return automated true when it is the computers turn', () => {
    expect(makeGame.resultFunc(true, 0, [], false)).toEqual({ automated: true, selectedButton: ''});
  });

  test('makeGame should return automated false when it is the players turn', () => {
    expect(makeGame.resultFunc(false, 0, [], false)).toEqual({ automated: false, selectedButton: ''});
  });

  test('makeGame should not return a selected button when it is the players turn', () => {
    expect(makeGame.resultFunc(false, 0, ['RED'], true)).toEqual({ automated: false, selectedButton: ''});
  });

  test('makeGame should not return a selected button when it is the computers turn but the button flash is off', () => {
    expect(makeGame.resultFunc(true, 0, ['RED'], false)).toEqual({ automated: true, selectedButton: ''});
  });

  test('makeGame should return a selected button when it is the computers turn and the button flash is on', () => {
    expect(makeGame.resultFunc(true, 0, ['RED'], true)).toEqual({ automated: true, selectedButton: 'RED'});
  });

  test('makeGame should return the selected button corresponding to the position index', () => {
    expect(makeGame.resultFunc(true, 1, ['RED', 'BLUE'], true)).toEqual({ automated: true, selectedButton: 'BLUE'});
    expect(makeGame.resultFunc(true, 2, ['RED', 'BLUE', 'GREEN', 'YELLOW'], true)).toEqual({ automated: true, selectedButton: 'GREEN'});
  });

});
