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
  display: flex;
`;

const StyledPlayerDetails = styled.div`
  flex: 0 0 200px;
`;

const StyledHand = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-around;
`;

const StyledCard = styled.div`

`;

export const Table = (props) => {

  return (
    <StyledTable className={props.className}>
      {
        props.players.map(
          player => <StyledPlayer key={player.id}>
            <StyledPlayerDetails>
              <div>{player.id}</div>
              <div>{player.balance}</div>
              { player.isDealer ? <div>D</div> : null}
              { player.isSmallBlind ? <div>S</div> : null}
              { player.isBigBlind ? <div>B</div> : null}
            </StyledPlayerDetails>
            <StyledHand>
              {
                player.hand.map(
                  card => <StyledCard key={card.id}>{card.id}</StyledCard>
                )
              }
            </StyledHand>
          </StyledPlayer>
        )
      }
    </StyledTable>
  )
};

Table.propTypes = {
  players: PropTypes.array,
}
