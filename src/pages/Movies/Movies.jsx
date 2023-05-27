import { useEffect, useState } from 'react';
import { serchMovie } from 'api/api';
import SearchList from 'components/SearchList/SearchList';
import { Input, Btn } from './Movies.styled';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchName, setSearchName] = useSearchParams('');
  const [inputValue, setInputValue] = useState('');
  const [movieData, setMovieData] = useState(null);
  const searchQueryy = searchName.get('querty');
  const locationMovie = useLocation();

  useEffect(() => {
    if (searchQueryy) {
      serchMovie(searchQueryy)
        .then(res => {
          setMovieData(res);
        })
        .catch(err => console.log(err));
    }
  }, [searchQueryy]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputValue === '') {
      alert('Enter something!');
      return;
    }
    setSearchName({ querty: inputValue });

    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movie"
          value={inputValue}
          onChange={handleChange}
        />
        <Btn type="submit">Search</Btn>
      </form>
      {movieData && <SearchList list={movieData} loc={locationMovie} />}
    </>
  );
};

export default Movies;
