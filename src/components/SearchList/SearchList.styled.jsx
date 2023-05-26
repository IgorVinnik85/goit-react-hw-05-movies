import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Ul = styled.ul`
  margin-left: 15px;
`;

export const LinkList = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
  margin-bottom: 10px;

  &:hover {
    color: #0056b3;
  }
`;