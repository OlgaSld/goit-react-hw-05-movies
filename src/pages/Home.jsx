import { getTrendingDay } from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesList() {
      try {
        const moviesList = await getTrendingDay();
        setMovies(moviesList);
      } catch (error) {
        console.error(error);
      }
    }

    getMoviesList();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
