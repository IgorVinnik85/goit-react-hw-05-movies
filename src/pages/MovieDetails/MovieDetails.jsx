import React, { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { moviesDetails, fileredGenres } from 'api/api';
import {
  Btn,
  Wrapper,
  WrapperImg,
  WrapperContent,
  LinkAdditional,
  Img,
} from './MovieDetails.styled';


const MovieDetails = () => {
  const [detailsData, setDetailsData] = useState(null);
  const params = useParams();
  const detailsId = Number(params.movieName);
  const locationDetails = useLocation();
  const navigate = useNavigate();
  const backLinkLocationRef = useRef(locationDetails.state?.from ?? '/');
  // console.log(locationDetails.state.from);

  useEffect(() => {
    moviesDetails(detailsId)
      .then(({ data }) => {
        // console.log(data);
        setDetailsData(data);
      })
      .catch(err => console.log(err));
  }, [detailsId]);

  const handleClickBack = () => {
    navigate(backLinkLocationRef.current);
  };
  // console.log(detailsData.genres);
  return (
    <Wrapper>
      {detailsData && (
        <>
          <Btn type="button" onClick={handleClickBack}>
            Go back
          </Btn>
          <WrapperImg>
            <Img
              src={`https://image.tmdb.org/t/p/original/${detailsData.poster_path}`}
              alt={detailsData.original_title}
              width="400"
            />
            <WrapperContent>
              <h2>{detailsData.original_title}</h2>
              <p>{`vote_average: ${detailsData.vote_average}`}</p>
              <h3>Overview</h3>
              <p>{detailsData.overview}</p>
              <h4>Genres</h4>
              <p>{fileredGenres(detailsData.genres)}</p>
              <span>Additional information:</span>
              <ul>
                <li>
                  <LinkAdditional to="cast">Cast</LinkAdditional>
                </li>
                <li>
                  <LinkAdditional to="reviews">Reviews</LinkAdditional>
                </li>
                <Outlet />
              </ul>
            </WrapperContent>
          </WrapperImg>
        </>
      )}
    </Wrapper>
  );
};

export default MovieDetails;
