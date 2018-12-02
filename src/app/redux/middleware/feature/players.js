import {MAKE_BET, setPlayers, setPlayerBalance} from '../../actions/players';
import {START_GAME} from '../../actions/game';
import {createPlayers} from '../../../utils/players';
import {selectPlayer} from '../../selectors/players';

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
            const newBalance = player.balance - action.payload.amount;
            // todo action splitter - out of money error or success
            next(setPlayerBalance(action.payload.player, newBalance));
            break;

        default:
            break;
    }
}
