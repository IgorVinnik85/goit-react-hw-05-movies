import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  gap: 30px;
  background-color: blue;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 15px;
`;

export const Li = styled.li`
  margin-left: 30px;
`;

export const Link = styled(NavLink)`
  color: white;

  &:hover {
    font-weight: bold;
  }

  &.active:not(:hover) {
    font-weight: bold;
    border-bottom: 2px solid white;
  }
`;
