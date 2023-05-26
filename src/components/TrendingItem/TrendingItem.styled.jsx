import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Img = styled.img`
  margin-bottom: 15px;
`;

export const LinkTitle = styled(Link)`
  color: black;

  &:hover {
    font-weight: bold;
  }

  &.active:not(:hover) {
    font-weight: bold;
  }
`;

export const Li = styled.li`
  width: 300px;
`;

