import {
    DRAW_CARD, CALL, setHand, setDeck,
} from '../../actions/round';
import {selectCurrentBet, selectPlayerBet, selectPlayerHand} from "../../selectors/round";
import {selectDeck} from "../../selectors/round";
import _ from "lodash";
import {makeBet} from "../../actions/players";

export const roundMiddleWare = ({dispatch, getState}) => (next) => (action) => {
    next(action);

    switch(action.type) {
        case DRAW_CARD:
            const deck = selectDeck(getState());
            const cardToDraw = deck[0];
            const newDeck = _.drop(deck, 1);
            const currentPlayerHand = selectPlayerHand(getState(), action.payload.player);

            next([
                setHand(action.payload.player, [cardToDraw, ...currentPlayerHand]),
                setDeck(newDeck),
            ]);
            break;

        case CALL:
            const currentBet = selectCurrentBet(getState());
            const playersCurrentBet = selectPlayerBet(getState(), action.payload.player);
            dispatch(makeBet(action.payload.player, currentBet - playersCurrentBet));
            break;

        default:
            break;
    }

};
