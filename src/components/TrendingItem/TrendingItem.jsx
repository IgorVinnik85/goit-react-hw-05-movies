import React from 'react';
import PropTypes from 'prop-types';
import {  useLocation } from 'react-router-dom';
import { Img, LinkTitle, Li } from './TrendingItem.styled';

const TrendingItem = ({ trandingTitle, movieId, poster }) => {
  // console.log(movieId);

  const location = useLocation();
  return (
    <Li>
      <Img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={trandingTitle}
        width="300"
      />
      <LinkTitle to={`/movies/${movieId}`} state={location}>
        {trandingTitle}
      </LinkTitle>
    </Li>
  );
};

export default TrendingItem;

TrendingItem.propTypes = {
  trandingTitle: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};
