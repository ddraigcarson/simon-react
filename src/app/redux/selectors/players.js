import _ from 'lodash';

export const selectPlayers = state => {
  const _players = Object.keys(state.players);
  const dealer = state.round.dealer;
  const smallBlind = state.round.smallBlind;
  const bigBlind = state.round.bigBlind;

  return _players.map(p => ({
    ...state.players[p],
    id: p,
    isDealer: dealer === p,
    isSmallBlind: smallBlind === p,
    isBigBlind: bigBlind === p,
  }))
}

export const selectPlayerId = index => `PLAYER_${index}`;

export const selectRandomPlayer = numberOfPlayers => selectPlayerId(_.random(0, numberOfPlayers-1));

export const selectNextPlayer = (player, players) => {
    const _players = Object.keys(players);
    const playerIndex = _players.indexOf(player);
    let nextPlayer = playerIndex + 1;
    if (nextPlayer === _players.length) {
        return _players[0];
    } else {
        return _players[nextPlayer];
    }
};
