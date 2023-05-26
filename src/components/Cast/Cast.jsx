import { useEffect, useState } from 'react';
import { cast } from 'api/api';
import { useParams } from 'react-router-dom';
import { Ul, Li } from './Cast.styled';

const Cast = () => {
  const [detailsData, setDetailsData] = useState(null);
  const params = useParams();
  const detailsId = Number(params.movieName);
  //   console.log(Number(params.movieName));

  useEffect(() => {
    cast(detailsId)
      .then(({ data }) => {
        // console.log(data.cast);
        setDetailsData(data.cast);
      })
      .catch(err => console.log(err));
  }, [detailsId]);

  return (
    <>
      {detailsData && (
        <>
          <Ul>
            {detailsData.map(
              ({ profile_path, character, original_name, id }) => {
                return (
                  <Li key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                      alt={original_name}
                      width="200"
                    />
                    <p>{original_name}</p>
                    <p>{`Character: ${character}`}</p>
                  </Li>
                );
              }
            )}
          </Ul>
        </>
      )}
    </>
  );
};

export default Cast;
