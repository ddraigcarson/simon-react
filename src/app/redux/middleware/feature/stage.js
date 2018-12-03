import {
    callBet,
    drawCard,
    setBigBlind,
    setCurrentPlayer,
    setDealer,
    setPlayerState,
    setSmallBlind,
    setStage,
    START_STAGE
} from "../../actions/round";
import {BLINDS, CHANGE_DEALER, POCKET_CARDS, PRE_FLOP} from "../../../constants/stages";
import {selectBigBlind, selectDealer, selectSmallBlind} from "../../selectors/round";
import {selectNextPlayer, selectPlayers, selectRandomPlayer} from "../../selectors/players";
import _ from "lodash";
import {IN} from "../../../constants/playerStates";
import {makeBet} from "../../actions/players";


export const stageMiddleWare = ({dispatch, getState}) => (next) => (action) => {
    next(action);

    if (action.type === START_STAGE) {
        next(setStage(action.payload.stage));

        switch (action.payload.stage) {
            case CHANGE_DEALER:
                const currentDealer = selectDealer(getState());
                const dealer = currentDealer ? selectNextPlayer(currentDealer, getState()) : selectRandomPlayer(getState());
                const smallBlind = selectNextPlayer(dealer, getState());
                const bigBlind = selectNextPlayer(smallBlind, getState());
                next([
                    setDealer(dealer),
                    setSmallBlind(smallBlind),
                    setBigBlind(bigBlind),
                ]);

                const players = selectPlayers(getState());
                _.forEach(players, p => next(setPlayerState(p.id, IN)));

                break;

            case BLINDS:
                dispatch(makeBet(selectSmallBlind(getState()), 50));
                dispatch(makeBet(selectBigBlind(getState()), 100));
                break;

            case POCKET_CARDS:
                let currentPlayer = selectSmallBlind(getState());
                for (let i = 0; i < 2; i++) {
                    for (let p = 0; p < getState().game.players; p++) {
                        next(setCurrentPlayer(currentPlayer));
                        dispatch(drawCard(currentPlayer));
                        currentPlayer = selectNextPlayer(currentPlayer, getState());
                    }
                }
                break;

            case PRE_FLOP:
                currentPlayer = selectNextPlayer(selectBigBlind(getState()), getState());
                next(setCurrentPlayer(currentPlayer));
                dispatch(callBet(currentPlayer));
                break;

            default:
                break;
        }
    }
}