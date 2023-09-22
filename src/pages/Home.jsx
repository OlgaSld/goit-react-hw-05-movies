import { getTrendingDay } from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getMoviesList() {
      try {
        const moviesList = await getTrendingDay({
          signal: controller.signal,
        });
        setMovies(moviesList);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.error(error);
        }
      }
    }

    getMoviesList();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
