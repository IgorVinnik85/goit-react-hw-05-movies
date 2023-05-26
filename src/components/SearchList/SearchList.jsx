import React from 'react';
// import { Link } from 'react-router-dom';
import { Ul, LinkList,  } from './SearchList.styled';

const SearchList = ({ list, loc }) => {
  console.log(list.data.results);
  if (list === null) {
  return
}
  const data = list.data.results;

  return (
    <Ul>
      {data.map(({ title, id }) => {
        return (
          <li key={id}>
            <LinkList to={`${id}`} state={{ from: loc }}>
              {title}
            </LinkList>
          </li>
        );
      })}
    </Ul>
  );
};

export default SearchList;
