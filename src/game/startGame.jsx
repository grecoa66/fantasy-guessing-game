import React from 'react';
import styled from 'styled-components';

const StartGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StartGame = ({ gameReady, clickHandler }) => {
  return (
    <StartGameWrapper>
      <h2>Welcome to the Daily Fantasy Guessing Game</h2>
      <h4>How to play:</h4>
      <p>
        Two players will appear on the screen. Click the player who you think
        has a higher Fantasy Points Per Game. Win the game when you select the
        correct player 10 times.
      </p>
      <StyledButton disabled={!gameReady} onClick={() => clickHandler(false)}>
        Start Game
      </StyledButton>
    </StartGameWrapper>
  );
};

export default StartGame;
