import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.2s ease;
  margin-left: 15px;
  margin-bottom: 15px;
  margin-right: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const Btn = styled.button`
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 4px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
