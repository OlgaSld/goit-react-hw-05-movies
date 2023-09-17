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
  margin-left: 50px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;

export const Header = styled.header`
  border-bottom: 1px solid grey;
  padding-top: 30px;
  padding-bottom: 30px;
`;
