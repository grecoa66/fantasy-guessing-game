import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  height: 50px;
  background-color: cornflowerblue;
`;

const Title = styled.h2`
  justify-items: center;
  margin: auto;
  color: white;
`;

const Item = styled.div`
  align-content: center;
  color: white;
  margin: auto 10px;
  text-decoration: none;

  &:hover {
    color: pink;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Alex Greco</Title>
    <Item href="https://www.linkedin.com/in/alexander-greco-2a687270/">
      Linkedin
    </Item>
  </HeaderWrapper>
);

export default Header;
