import React, { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { moviesDetails } from 'api/api';
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
  // console.log(Number(params.movieName));

  useEffect(() => {
    moviesDetails(detailsId)
      .then(({ data }) => {
        // console.log(data);
        setDetailsData(data);
      })
      .catch(err => console.log(err));
  }, [detailsId]);

  const handleClickBack = () => {
    navigate(locationDetails.state ?? '/movies');
  };

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
              <p>{[]}</p>
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
