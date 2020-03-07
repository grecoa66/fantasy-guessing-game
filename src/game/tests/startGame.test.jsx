import React from 'react';
import { render } from '@testing-library/react';
import StartGame from '../startGame';

test('Ensure start button is disbaled before game is ready to start', () => {
  const { getByTestId } = render(
    <StartGame gameReady={false} clickHandler={null} />
  );

  const startButton = getByTestId('startButton');

  expect(startButton.disabled).toBeTruthy();
});

test('Ensure start button is enabled when the game is ready to play', () => {
  const { getByTestId } = render(
    <StartGame gameReady={true} clickHandler={null} />
  );

  const startButton = getByTestId('startButton');

  expect(startButton.disabled).toBeFalsy();
});
