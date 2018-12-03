import {selectPlayerId} from "../redux/selectors/players";
import {IN} from "../constants/playerStates";

export const createPlayers = (numberOfPlayers, startingBalance) => {
    let players = {};
    for (let i=0 ; i<numberOfPlayers ; i++) {
        players[selectPlayerId(i)] = {
            balance: startingBalance,
            computer: i !== 0,
        };
    }
    return players;
};

export const createPlayersForRound = (numberOfPlayers) => {
    let players = {};
    for (let i=0 ; i<numberOfPlayers ; i++) {
        players[selectPlayerId(i)] = {
            bet: 0,
            state: IN,
        };
    }
    return players;
};