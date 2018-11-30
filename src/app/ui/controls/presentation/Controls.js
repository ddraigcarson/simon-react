import React, {useState} from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <div>
        Number of players:
        <input
          type="number"
          value={players}
          onChange={(e) => setPlayers(e.target.value)}
          />
      </div>
      <div>
        Starting money:
        <input
          type="number"
          value={startingMoney}
          onChange={(e) => setStartingMoney(e.target.value)}
          />
      </div>
      <div>
        Small blind amount:
        <input
          type="number"
          value={smallBlindAmount}
          onChange={(e) => setSmallBlindAmount(e.target.value)}
          />
      </div>
      <button onClick={handleSubmit}>Start Game</button>
    </div>
  )
}

Controls.propTypes = {
  startGame: PropTypes.func.isRequired,
}
