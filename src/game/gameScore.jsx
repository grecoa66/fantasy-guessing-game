import React from 'react';
import styled from 'styled-components';

const GameScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

const Correct = styled.p`
  color: green;
  margin: 5px 20px;
`;

const Incorrect = styled.p`
  color: red;
  margin: 5px 20px;
`;

const GameScore = ({ correctGuesses, totalGuesses }) => {
  return (
    <GameScoreWrapper>
      <Correct data-testid="correctGuesses">
        Correct Guesses: {correctGuesses}
      </Correct>
      <Incorrect data-testid="incorrectGuesses">
        Incorrect Guesses: {totalGuesses - correctGuesses}
      </Incorrect>
    </GameScoreWrapper>
  );
};

export default GameScore;
