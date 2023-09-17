import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AddInfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid gray;
`;

export const Link = styled(NavLink)`
  margin-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  margin-top: 20px;
`;
