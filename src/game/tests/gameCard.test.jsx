import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from '../playerCard';

test('Render a player card', () => {
  const player = {
    firstName: 'Alex',
    lastName: 'Greco',
    position: 'Forward',
    image: 'image-link.jpg'
  };

  const expectedPlayerName = 'Alex Greco';
  const expectedPlayerPosition = 'Position: Forward';

  const { getByTestId } = render(
    <PlayerCard player={player} handleUserSelection={null} />
  );

  const playerName = getByTestId('playerName');
  expect(playerName.textContent).toEqual(expectedPlayerName);

  const playerPosition = getByTestId('playerPosition');
  expect(playerPosition.textContent).toEqual(expectedPlayerPosition);
});
