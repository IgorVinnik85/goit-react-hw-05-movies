import { useEffect, useState } from 'react';
import { serchMovie } from 'api/api';
import SearchList from 'components/SearchList/SearchList';
import { Input, Btn } from './Movies.styled';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [searchName, setSearchName] = useState('');
    const [searchName, setSearchName] = useSearchParams('')
  const [inputValue, setInputValue] = useState('');
  const [movieData, setMovieData] = useState(null);
  // const [showList, setShowList] = useState(false);
  const searchQueryy = searchName.get('querty');
  const locationMovie = useLocation()
  // console.log(searchQueryy);
  useEffect(() => {
    serchMovie(searchQueryy)
      .then(res => {
        setMovieData(res);
      })
      .catch(err => console.log(err));
  }, [searchName, searchQueryy]);

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
    // setShowList(true);
    setInputValue('');
  };
  console.log(movieData);
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
