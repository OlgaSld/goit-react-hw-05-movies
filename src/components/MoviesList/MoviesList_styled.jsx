import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  margin-top: 20px;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-weight: 400;
`;
