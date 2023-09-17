import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'c6a4377eea0a4d30a7e4b3682710fc17';

export const getTrendingDay = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return data.results;
};

export const getMovieQuery = async query => {
  const resp = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return resp.data;
};

export const getMovieId = async movieId => {
  const { data } = await axios.get(
    `search/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieCast = async movieId => {
  const resp = await axios.get(
    `search/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return resp.data;
};

export const getMovieReviews = async movieId => {
  const resp = await axios.get(
    `search/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return resp.data;
};
