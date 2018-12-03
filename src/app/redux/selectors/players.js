import _ from 'lodash';
import {IN} from "../../constants/playerStates";

export const selectPlayerId = index => `PLAYER_${index}`;

export const selectPlayer = (state, id) => state.players[id];

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
        hand: state.round.hands[p] || [],
        bet: state.round.bets[p] || 0,
        status: state.round.playerStates[p] || IN,
    }))
}

export const selectNextPlayer = (player, state) => {
    const _players = Object.keys(state.players);
    const playerIndex = _players.indexOf(player);
    let nextPlayer = playerIndex + 1;
    if (nextPlayer === _players.length) {
        return _players[0];
    } else {
        return _players[nextPlayer];
    }
}

export const selectRandomPlayer = state => {
    const _players = Object.keys(state.players);
    return _players[_.random(0, _players.length - 1)];
}
