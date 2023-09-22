import { getMovieQuery } from 'api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const controller = new AbortController();

    if (!query) {
      return;
    }
    async function getMovies() {
      try {
        const movieQuery = await getMovieQuery(query, {
          signal: controller.signal,
        });

        console.log(movieQuery);
        setMovies(movieQuery);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.error(error);
        }
      }
    }
    getMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
export default Movies;
