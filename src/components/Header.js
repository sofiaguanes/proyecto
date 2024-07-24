import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #000, #00ff00);
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
  box-shadow: 0 0 10px #39ff14;
`;

const Header = () => {
  return (
    <HeaderContainer>
      CodersBlog
    </HeaderContainer>
  );
};

export default Header;