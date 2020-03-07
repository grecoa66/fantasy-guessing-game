import React from 'react';
import styled from 'styled-components';

const GameWonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBanner = styled.h2`
  color: cornflowerblue;
  text-align: center;
  margin: 25px 0;
`;

const StyledButton = styled.button`
  background-color: cornflowerblue;
  color: white;
  height: 40px;
  width: 80px;

  &:disabled {
    background-color: darkgray;
  }
`;

const GameWon = ({ handleNewGame }) => {
  return (
    <GameWonWrapper>
      <StyledBanner>
        Congratulations! You won the Fantasy Guessing Game!
      </StyledBanner>
      <StyledButton onClick={() => handleNewGame()}>Play Again</StyledButton>
    </GameWonWrapper>
  );
};

export default GameWon;
