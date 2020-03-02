import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameCard from '../player/playerCard';

const GamePanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const shownPlayers = [];
/**
 * I want to show two players for each round of the game.
 * I want to show unique players each round.
 * I also want to select players at random so each time you play the game it is random.
 */
const selectPlayer = (players, shownPlayers) => {
  console.log('ShownPlayers: ', shownPlayers);
  // Pick intial random player
  let index = Math.floor(Math.random() * players.length);
  let selectedPlayer = players[index];
  // Ensure that player hasn't been seen
  while (shownPlayers.includes(selectedPlayer.playerId)) {
    index = Math.floor(Math.random() * players.length);
    selectedPlayer = players[index];
  }
  shownPlayers.push(selectedPlayer.playerId);
  return selectedPlayer;
};

const GamePanel = ({ players }) => {
  const [firstPlayer, setFirstPlayer] = useState(
    selectPlayer(players, shownPlayers)
  );
  const [secondPlayer, setSecondPlayer] = useState(
    selectPlayer(players, shownPlayers)
  );

  return (
    <GamePanelWrapper>
      <GameCard player={firstPlayer} />
      <GameCard player={secondPlayer} />
    </GamePanelWrapper>
  );
};

export default GamePanel;
