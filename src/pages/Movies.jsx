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
    if (!query) {
      return;
    }
    async function getMovies() {
      try {
        const movieQuery = await getMovieQuery(query);
        setMovies(movieQuery);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
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
