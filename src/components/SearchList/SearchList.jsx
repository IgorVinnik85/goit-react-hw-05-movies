import React from 'react';
import { Link } from 'react-router-dom';
import { Ul, LinkList } from './SearchList.styled';

const SearchList = ({ list }) => {
  const data = list.data.results;

  return (
    <Ul>
      {data.map(({ title, id }) => {
          return (
            <li key={id}>
              <LinkList to={`${id}`}>{title}</LinkList>
            </li>
          );
      })}
    </Ul>
  );
};

export default SearchList;
