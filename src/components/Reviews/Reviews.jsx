import { useEffect, useState } from 'react';
import { reviews } from 'api/api';
import { useParams } from 'react-router-dom';

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
    console.log(id)
    setActiveReviewId(id === activeReviewId ? null : id);
  };

  return (
    <>
      {detailsData && (
        <>
          <ul>
            {detailsData.map(({ author, content, id }) => {
              return (
                <li onClick={() => showText(id)} key={id}>
                  <h2>{author}</h2>
                  {activeReviewId === id && <p>{content}</p>}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};

export default Reviews;
