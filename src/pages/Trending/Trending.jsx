import { trendingMovies } from 'api/api';
import  TrendingItem  from 'components/TrendingItem/TrendingItem';
import { useEffect, useState } from 'react';
import { Title, Wrapper, Ul } from './Trending.styled';

 const Trending = () => {
    const [trendingArr, setTrendingArr] = useState([]);
  useEffect(() => {
   trendingMovies()
     .then(({ data }) => setTrendingArr(data.results))
     .catch(er => console.log(er));
  }, []);

  return (
    <Wrapper>
      <Title>Trending today</Title>
      <Ul>
        {trendingArr.map(({ id, title, poster_path }) => {
          return (
            <TrendingItem
              key={id}
              trandingTitle={title}
              movieId={id}
              poster={poster_path}
            />
          );
        })}
      </Ul>
    </Wrapper>
  );
 };

 export default Trending;
