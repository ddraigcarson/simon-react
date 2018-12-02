import * as DECK from '../constants/deck';
import * as R from 'ramda';
import _ from 'lodash';

export const createDeck = () => {
  let deck = [];
  for (let suit in DECK.SUITS){
    deck = deck.concat(createSuit(DECK.SUITS[suit]));
  }
  return _.shuffle(deck);
}

const createSuit = (_suit) => {
  let suit = [];
  for (let i=1 ; i<=10 ; i++) {
    suit.push(createCard(i, _suit))
  }
  R.forEach(c => suit.push(createCard(c, _suit)), DECK.FACE_CARDS);
  return suit;
}

const createCard = (rank, suit) => {
  return ({
    id: `${rank}_OF_${suit.name}`,
    rank,
    suit: suit.name,
    colour: suit.colour,
  })
}
