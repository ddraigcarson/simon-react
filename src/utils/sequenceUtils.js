import BUTTONS from '../constants/buttons';

export const getRandomButton = () => {
  const randomIndex = Math.floor((Math.random()*BUTTONS.length));
  return BUTTONS[randomIndex].id;
}

export const addToSequence = (sequence, value) => {
  return [].concat(sequence, [value]);
}

export const addRandomToSequence = sequence => {
  return [].concat(
    sequence,
    [ getRandomButton() ]
  );
}
