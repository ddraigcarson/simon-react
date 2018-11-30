import _ from 'lodash';

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