import { useEffect, useState } from 'react';
import { reviews } from 'api/api';
import { useParams } from 'react-router-dom';
import { Li } from './Reviews.styled';

const Reviews = () => {
  const [detailsData, setDetailsData] = useState(null);
  const [activeReviewId, setActiveReviewId] = useState(null);
  const params = useParams();
  const detailsId = Number(params.movieName);

  useEffect(() => {
    reviews(detailsId)
      .then(({ data }) => {
        // console.log(data.results);
        setDetailsData(data.results);
      })
      .catch(err => console.log(err));
  }, [detailsId]);

  const showText = id => {
    console.log(id);
    setActiveReviewId(id === activeReviewId ? null : id);
  };
  // console.log(detailsData);
  return (
    <>
      {detailsData && detailsData.length > 0 ? (
        <>
          <ul>
            {detailsData.map(({ author, content, id }) => {
              return (
                <Li onClick={() => showText(id)} key={id}>
                  <h2>{`-${author}`}</h2>
                  {activeReviewId === id && <p>{content}</p>}
                </Li>
              );
            })}
          </ul>
        </>
      ) : (
        <div>We don't have any rewiews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;
