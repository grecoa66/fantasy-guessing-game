import React from 'react';
import styled from 'styled-components';
import Header from './header/header.jsx';
import GameContainer from './game/gameContainer';

const AppWrapper = styled.div`
  background-color: lightgray;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <GameContainer />
    </AppWrapper>
  );
};

export default App;
