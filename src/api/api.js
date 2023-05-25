import axios from 'axios';

const API_KEY = 'f6b5dfee4ed71b77313e17116e40108d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const trendingMovies = async () => {
  return await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: `${API_KEY}`,
      page: 1,
    },
  });
};

export const serchMovie = async movie => {
  return await axios.get(
    `${BASE_URL}/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    {
      params: {
        api_key: `${API_KEY}`,
      },
    }
  );
};

export const moviesDetails = async id => {
  return await axios.get(`${BASE_URL}/movie/${id}?language=en-US`, {
    params: {
      api_key: `${API_KEY}`,
    },
  });
};

export const cast = async id => {
  return await axios.get(`${BASE_URL}/movie/${id}/credits?language=en-US`, {
    params: {
      api_key: `${API_KEY}`,
    },
  });
};

export const reviews = async id => {
  return await axios.get(
    `${BASE_URL}/movie/${id}/reviews?language=en-US&page=1`,
    {
      params: {
        api_key: `${API_KEY}`,
      },
    }
  );
};
