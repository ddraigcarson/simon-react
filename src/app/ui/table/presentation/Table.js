import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledPlayer = styled.div`
  border: 1px solid black;

`;

export const Table = (props) => {

  return (
    <StyledTable className={props.className}>
      {
        props.players.map(
          player => <StyledPlayer key={player.id}>
            <div>{player.id}</div>
            <div>{player.balance}</div>
            { player.isDealer ? <div>D</div> : null}
            { player.isSmallBlind ? <div>S</div> : null}
            { player.isBigBlind ? <div>B</div> : null}
          </StyledPlayer>
        )
      }
    </StyledTable>
  )
};

Table.propTypes = {
  players: PropTypes.array,
}
