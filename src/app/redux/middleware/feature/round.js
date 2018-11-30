import {START_GAME} from '../../actions/game';
import {BEGIN_BLINDS, setRound, setDealer, setStage, beginBlinds} from '../../actions/round';
import {selectNextPlayer, selectRandomPlayer} from "../../selectors/players";
import {BLINDS} from "../../../constants/stages";
import {makeBet} from "../../actions/players";

export const roundMiddleWare = ({getState}) => (next) => (action) => {
    next(action); // next is function dispatch(action) {}

    switch (action.type) {

        case START_GAME:
            next([
                setRound(1),
                setDealer(selectRandomPlayer(action.payload.players)),
                beginBlinds(),
            ]);
            break;

        case BEGIN_BLINDS:
            const smallBlind = selectNextPlayer(getState().round.dealer);
            const bigBlind = selectNextPlayer(smallBlind);
            next([
                setStage(BLINDS),
                makeBet(smallBlind, 50),
                makeBet(bigBlind, 100),
            ]);
            break;

        default:
            break;
    }
};
