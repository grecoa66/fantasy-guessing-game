import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlayerCard from '../player/playerCard';
import fetchPlayerData from '../fetchPlayerData/fetchPlayerData';

const GameWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 50vh;
  flex-direction: column;
`;

const GameContainer = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const playerData = await fetchPlayerData();
      console.log('IN USE EFFECT', JSON.stringify(playerData, null, 2));

      setPlayers(playerData);
    };

    getPlayers();
  }, []);

  return (
    <GameWrapper>
      {players &&
        players.map(player => {
          return <PlayerCard player={player} key={player.lastNight} />;
        })}
    </GameWrapper>
  );
};

export default GameContainer;
