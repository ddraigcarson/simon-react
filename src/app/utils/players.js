import {selectPlayerId} from "../redux/selectors/players";

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
