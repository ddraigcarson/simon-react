import _ from 'lodash';
import {DRAW_CARD, setHand, setDeck} from '../../actions/deck';
import {selectDeck, selectPlayerHand} from '../../selectors/deck';

export const deckMiddleWare = ({getState}) => (next) => (action) => {
  next(action);

  switch (action.type) {

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

    default:
      break;
  }
}
