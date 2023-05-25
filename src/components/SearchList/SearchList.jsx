import React from 'react';
import { Link } from 'react-router-dom';

const SearchList = ({ list }) => {
  const data = list.data.results;

  return (
    <ul>
      {data.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          );
      })}
    </ul>
  );
};

export default SearchList;
