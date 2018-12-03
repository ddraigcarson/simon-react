import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTableDetails = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
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
      <StyledTableDetails>
        <div>{`Pot: ${props.table.pot}`}</div>
        <div>{`Deck: ${props.table.deck}`}</div>
        <div>{`Discard: ${props.table.discard}`}</div>
      </StyledTableDetails>
      {
        _.map(props.players,
          player => <StyledPlayer key={player.id}>
            <StyledPlayerDetails>
              <div>{`${player.id} - ${player.status}`}</div>
              <div>{`Balance: ${player.balance}`}</div>
              <div>{`Bet: ${player.bet}`}</div>
              { player.isDealer ? <div>D</div> : null}
              { player.isSmallBlind ? <div>S</div> : null}
              { player.isBigBlind ? <div>B</div> : null}
            </StyledPlayerDetails>
            <StyledHand>
              {
                _.map(player.hand,
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
};
