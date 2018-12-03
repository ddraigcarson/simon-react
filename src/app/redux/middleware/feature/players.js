import {MAKE_BET, setPlayers, setPlayerBalance} from '../../actions/players';
import {START_GAME} from '../../actions/game';
import {setBet, setPot} from '../../actions/round';
import {createPlayers} from '../../../utils/players';
import {selectPlayer} from '../../selectors/players';
import {selectPot} from '../../selectors/round';

export const playersMiddleWare = ({dispatch, getState}) => (next) => (action) => {
    next(action);

    switch (action.type) {

        case START_GAME:
            next([
                setPlayers(createPlayers(action.payload.players, action.payload.startingMoney)),
            ]);
            break;

        case MAKE_BET:
            const player = selectPlayer(getState(), action.payload.player);
            // todo action splitter - out of money error or success
            const newBalance = player.balance - action.payload.amount;
            const newPot = selectPot(getState()) + action.payload.amount;
            const newBet = action.payload.amount;
            next([
                setPlayerBalance(action.payload.player, newBalance),
                setPot(newPot),
                setBet(action.payload.player, newBet)
            ]);
            break;

        default:
            break;
    }
}
