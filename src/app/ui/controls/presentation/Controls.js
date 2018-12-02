import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {NumberInput} from '../../form/NumberInput';

export const Controls = (props) => {

  const [players, setPlayers] = useState(5);
  const [startingMoney, setStartingMoney] = useState(500);
  const [smallBlindAmount, setSmallBlindAmount] = useState(50);

  const handleSubmit = () => {
    props.startGame({
        players,
        startingMoney,
        smallBlindAmount,
    });
  };

  return (
    <div className={props.className}>
      <NumberInput
        label="Number of players:"
        value={players}
        onChange={setPlayers}
        />
      <NumberInput
        label="Starting money:"
        value={startingMoney}
        onChange={setStartingMoney}
        />
      <NumberInput
        label="Small blind amount:"
        value={smallBlindAmount}
        onChange={setSmallBlindAmount}
        />
      <button onClick={handleSubmit}>Start Game</button>
    </div>
  )
}

Controls.propTypes = {
  className: PropTypes.string,
  startGame: PropTypes.func.isRequired,
}
