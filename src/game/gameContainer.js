import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StartGame from './startGame';
import GamePanel from './gamePanel';
import fetchPlayerData from '../fetchPlayerData/fetchPlayerData';

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 60vw;
  max-width: 800px;
  margin: 20px auto;
  padding: 25px;
  background-color: white;
  color: cornflowerblue;
`;

const GameContainer = () => {
  // Show rules before game starts
  const [preGame, setPreGame] = useState(true);
  // Are the players loaded? The game is ready after they are loaded
  const [gameReady, setGameReady] = useState(false);
  // All the player data needed to play the game
  const [players, setPlayers] = useState([]);

  // Fetch players
  useEffect(() => {
    const getPlayers = async () => {
      const playerData = await fetchPlayerData();

      setPlayers(playerData);
      setGameReady(true);
    };

    getPlayers();
  }, []);

  return (
    <GameWrapper>
      {preGame ? (
        <StartGame gameReady={gameReady} clickHandler={setPreGame} />
      ) : (
        <GamePanel players={players} />
      )}
    </GameWrapper>
  );
};

export default GameContainer;
