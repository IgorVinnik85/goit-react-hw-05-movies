import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Btn = styled.button`
  display: inline-block;
  background-color: #eaeaea;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  margin-left: 15px;
`;

export const WrapperImg = styled.div`
  display: flex;
  gap: 15px;
`;

export const WrapperContent = styled.div`
  > * {
    margin-bottom: 15px;
  }
`;

export const LinkAdditional = styled(Link)`
display: block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;
  margin-bottom: 10px;

  &:hover {
    color: #0056b3;
  }
`;

export const Img = styled.img`
  flex-shrink: 0;
  align-self: flex-start;
`;