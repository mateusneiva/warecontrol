import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #487de8;
  width: 100%;
  height: 80px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
`;

export const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  background: #355dad;
  font-size: 16px;
  font-weight: 500;
  padding-inline: 35px;
`;

export const Logo = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #ffffff;
`;
