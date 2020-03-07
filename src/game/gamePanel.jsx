import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameCard from '../player/playerCard';
import GameScore from './gameScore';

const GamePanelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

let shownPlayers = [];
/**
 * I want to show two players for each round of the game.
 * I want to show unique players each round.
 * I also want to select players at random so each time you play it is different.
 */
const selectPlayer = (players, shownPlayers) => {
  // Pick intial random player
  let index = Math.floor(Math.random() * players.length);
  let selectedPlayer = players[index];
  // Ensure that player hasn't been seen
  while (shownPlayers.includes(selectedPlayer.playerId)) {
    index = Math.floor(Math.random() * players.length);
    selectedPlayer = players[index];
  }

  shownPlayers.push(selectedPlayer.playerId);

  // Flush shownPlayers if all players have been used in game
  if (players.length === shownPlayers.length) {
    shownPlayers = [];
  }
  console.log('ShownPlayers: ', shownPlayers);
  return selectedPlayer;
};

const GamePanel = ({ players }) => {
  const [firstPlayer, setFirstPlayer] = useState();
  const [secondPlayer, setSecondPlayer] = useState();
  const [guessCount, setGuessCount] = useState(0);
  const [correctGuessCount, setCorrectGuessCount] = useState(0);

  useEffect(() => {
    setFirstPlayer(selectPlayer(players, shownPlayers));
    setSecondPlayer(selectPlayer(players, shownPlayers));
  }, [guessCount, players]);

  /**
   * Determine if the user's selection was correct.
   * Increment guess counters, which causes effect hook to show new players.
   * @param {*} selectedPlayer
   */
  const handleUserSelection = selectedPlayer => {
    let result = false;
    if (selectedPlayer.playerId === firstPlayer.playerId) {
      if (firstPlayer.fppg > secondPlayer.fppg) {
        result = true;
        setCorrectGuessCount(correctGuessCount + 1);
      }
    } else {
      if (secondPlayer.fppg > firstPlayer.fppg) {
        result = true;
        setCorrectGuessCount(correctGuessCount + 1);
      }
    }

    setGuessCount(guessCount + 1);
    return result;
  };

  return (
    <>
      <GameScore correctGuesses={correctGuessCount} totalGuesses={guessCount} />
      <GamePanelWrapper>
        {firstPlayer && secondPlayer && (
          <>
            <GameCard
              player={firstPlayer}
              handleUserSelection={handleUserSelection}
            />
            <GameCard
              player={secondPlayer}
              handleUserSelection={handleUserSelection}
            />
          </>
        )}
      </GamePanelWrapper>
    </>
  );
};

export default GamePanel;
