import { trendingMovies } from 'api/api';
import  TrendingItem  from 'components/TrendingItem/TrendingItem';
import { useEffect, useState } from 'react';

 const Trending = () => {
    const [trendingArr, setTrendingArr] = useState([]);
  useEffect(() => {
   trendingMovies()
     .then(({ data }) => setTrendingArr(data.results))
     .catch(er => console.log(er));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>{trendingArr.map( ({id, title}) => {
        return <TrendingItem key={id} trandingTitle={title} movieId={id} />;
      })}</ul>
    </div>
  );
 };

 export default Trending;
