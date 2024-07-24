import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #000, #00ff00);
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  margin-top: auto;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00;
  box-shadow: 0 0 10px #39ff14;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; 2024 CodersBlog
    </FooterContainer>
  );
};

export default Footer;