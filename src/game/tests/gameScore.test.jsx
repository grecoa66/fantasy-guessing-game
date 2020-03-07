import React from 'react';
import { render } from '@testing-library/react';
import GameScore from '../gameScore';

test('The game score displays the correct score based on props', () => {
  const mockTotalGuesses = 10;
  const mockCorrectGuesses = 5;
  const expectedCorrectGuesses = 'Correct Guesses: 5';
  const expectedIncorrectGuesses = 'Incorrect Guesses: 5';

  const { getByTestId } = render(
    <GameScore
      correctGuesses={mockCorrectGuesses}
      totalGuesses={mockTotalGuesses}
    />
  );

  const correctGuesses = getByTestId('correctGuesses');
  expect(correctGuesses.textContent).toEqual(expectedCorrectGuesses);

  const incorrectGuesses = getByTestId('incorrectGuesses');
  expect(incorrectGuesses.textContent).toEqual(expectedIncorrectGuesses);
});
