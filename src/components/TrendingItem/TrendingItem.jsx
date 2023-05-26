import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TrendingItem = ({ trandingTitle, movieId }) => {
  // console.log(movieId);

  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${movieId}`} state={location}>
        {trandingTitle}
      </Link>
    </li>
  );
};

export default TrendingItem;
