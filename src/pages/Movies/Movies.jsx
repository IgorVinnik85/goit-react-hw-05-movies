import { useEffect, useState } from 'react';
import { serchMovie } from 'api/api';
import SearchList from 'components/SearchList/SearchList';
import { Input, Btn } from './Movies.styled';

const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
  
    serchMovie(searchName)
      .then(res => {
        setMovieData(res);
      })
      .catch(err => console.log(err));
  }, [searchName]);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputValue === '') {
      alert('Enter something!');
      return;
    }
    setSearchName(inputValue);
    setShowList(true);
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
      {showList && <SearchList list={movieData} />}
    </>
  );
};

export default Movies;
