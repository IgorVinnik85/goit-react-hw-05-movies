import React from 'react';
import { Link } from 'react-router-dom';

const TrendingItem = ({ trandingTitle, movieId }) => {
  // console.log(movieId);
  return (
    <li>
      <Link to={`/movies/${movieId}`}>{trandingTitle}</Link>
    </li>
  );
};

export default TrendingItem;