import {START_STAGE, setDealer, setSmallBlind, setBigBlind, setStage, setCurrentPlayer} from '../../actions/round';
import {makeBet} from "../../actions/players";
import {drawCard} from "../../actions/deck";
import {selectNextPlayer, selectRandomPlayer} from "../../selectors/players";
import {selectDealer, selectSmallBlind, selectBigBlind} from "../../selectors/round";
import {CHANGE_DEALER, BLINDS, POCKET_CARDS} from "../../../constants/stages";

export const roundMiddleWare = ({dispatch, getState}) => (next) => (action) => {
    next(action);

    if (action.type === START_STAGE) {
      switch (action.payload.stage) {
        case CHANGE_DEALER:
          const currentDealer = selectDealer(getState());
          const dealer = currentDealer ? selectNextPlayer(currentDealer, getState()) : selectRandomPlayer(getState());
          const smallBlind = selectNextPlayer(dealer, getState());
          const bigBlind = selectNextPlayer(smallBlind, getState());
          next([
            setStage(CHANGE_DEALER),
            setDealer(dealer),
            setSmallBlind(smallBlind),
            setBigBlind(bigBlind),
          ]);
          break;

        case BLINDS:
          next(setStage(BLINDS));
          dispatch(makeBet(selectSmallBlind(getState()), 50));
          dispatch(makeBet(selectBigBlind(getState()), 100));
          break;

        case POCKET_CARDS:
          next(setStage(BLINDS));

          let currentPlayer = selectSmallBlind(getState());
          for (let i=0 ; i<2 ; i++) {
            for (let p=0 ; p<getState().game.players ; p++) {
              next(setCurrentPlayer(currentPlayer));
              dispatch(drawCard(currentPlayer));
              currentPlayer = selectNextPlayer(currentPlayer, getState());
            }
          }
          break;

        default:
          break;
      }
    }
};
