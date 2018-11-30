import {MAKE_BET, setPlayers} from '../../actions/players';
import {START_GAME} from '../../actions/game';
import {createPlayers} from "../../../utils/players";

export const playersMiddleWare = () => (next) => (action) => {
    next(action); // next is function dispatch(action) {}

    switch (action.type) {

        case START_GAME:
            next([
                setPlayers(createPlayers(action.payload.players, action.payload.startingMoney)),
            ]);
            break;

        case MAKE_BET:
            next([]);
            break;

        default:
            break;
    }
}
