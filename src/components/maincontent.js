import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  background: #1a1a1a;
  color: #fff;
  min-height: 80vh;
  padding: 20px;
  box-shadow: 0 0 10px #39ff14;
`;

const NeonButton = styled.button`
  background: #0d0d0d;
  border: 2px solid #39ff14;
  color: #39ff14;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 5px #39ff14, 0 0 10px #39ff14;

  &:hover {
    background: #39ff14;
    color: #0d0d0d;
  }
`;

const MainContent = () => {
  return (
    <MainContainer>
      <h1>Welcome to CodersBlog</h1>
     
      <NeonButton>Read More</NeonButton>
    </MainContainer>
  );
};

export default MainContent;