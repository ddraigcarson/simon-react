const createSuit = (name, colour) => ({
  name, colour,
})

export const SUIT_DIAMONDS = 'Diamonds';
export const SUIT_HEARTS = 'Hearts';
export const SUIT_CLUBS = 'Clubs';
export const SUIT_SPADES = 'Spades';

export const COLOUR_RED = 'Red';
export const COLOUR_BLACK = 'Black';

export const SUITS = {
  DIAMONDS: createSuit(SUIT_DIAMONDS, COLOUR_RED),
  HEARTS: createSuit(SUIT_HEARTS, COLOUR_RED),
  CLUBS: createSuit(SUIT_CLUBS, COLOUR_BLACK),
  SPADES: createSuit(SUIT_SPADES, COLOUR_BLACK),
};

export const COLOURS = [
  COLOUR_RED,
  COLOUR_BLACK
];

export const FACE_JACK = 'Jack';
export const FACE_QUEEN = 'Queen';
export const FACE_KING = 'King';

export const FACE_CARDS = [
  FACE_JACK,
  FACE_QUEEN,
  FACE_KING
];
