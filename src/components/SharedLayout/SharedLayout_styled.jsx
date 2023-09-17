import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const NavItem = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 24px;
  font-weight: 700;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: 50px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;
