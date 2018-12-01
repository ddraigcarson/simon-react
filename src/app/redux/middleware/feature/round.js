import {START_GAME} from '../../actions/game';
import {BEGIN_BLINDS, setRound, setDealer, setSmallBlind, setBigBlind, setStage} from '../../actions/round';
import {selectNextPlayer, selectRandomPlayer} from "../../selectors/players";
import {CHANGE_DEALER, BLINDS} from "../../../constants/stages";
import {makeBet} from "../../actions/players";

export const roundMiddleWare = ({getState}) => (next) => (action) => {
    next(action); // next is function dispatch(action) {}

    switch (action.type) {

        case START_GAME:
            const dealer = selectRandomPlayer(action.payload.players);
            const smallBlind = selectNextPlayer(dealer, getState().players);
            const bigBlind = selectNextPlayer(smallBlind, getState().players);
            next([
                setRound(1),
                setStage(CHANGE_DEALER),
                setDealer(dealer),
                setSmallBlind(selectNextPlayer(dealer, getState().players)),
                setBigBlind(selectNextPlayer(smallBlind, getState().players)),
            ]);
            break;

        case BEGIN_BLINDS:
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
