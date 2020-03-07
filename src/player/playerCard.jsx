import React from 'react';
import styled from 'styled-components';

const PlayerCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;

  border: solid 2px black;
`;

const UpperDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
`;

const StyledName = styled.h3`
  color: navy;
`;

const StyledPosition = styled.p`
  color: forestgreen;
`;

const StyledImage = styled.img`
  width: 20vw;
  max-width: 300px;
  justify-content: center;
  margin: auto;
`;

const PlayerCard = ({ player, handleUserSelection }) => {
  const { firstName, lastName, position, image } = player;

  return (
    <PlayerCardWrapper onClick={() => handleUserSelection(player)}>
      <UpperDetail>
        <StyledName>
          {firstName} {lastName}
        </StyledName>
        <StyledPosition>Position: {position}</StyledPosition>
      </UpperDetail>
      <StyledImage src={image} />
    </PlayerCardWrapper>
  );
};

export default PlayerCard;
