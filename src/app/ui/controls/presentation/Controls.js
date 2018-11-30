import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const Controls = (props) => {

  const [players, setPlayers] = useState(0);
  const [startingMoney, setStartingMoney] = useState(0);

  const handleSubmit = () => {
    props.startGame({
      players,
      startingMoney,
    })
  }

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
      <button onClick={handleSubmit}>Start Game</button>
    </div>
  )
}

Controls.propTypes = {
  startGame: PropTypes.func.isRequired,
}
