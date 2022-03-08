import React from 'react';
import { HeaderContainer, HeaderContent, Logo, LogoutButton } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Logo</Logo>
        <LogoutButton>Logout</LogoutButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
