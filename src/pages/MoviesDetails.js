import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieId } from 'api';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;

    async function getMoviesInfo() {
      try {
        const movieById = await getMovieId(movieId);
        setMovies(movieById);
      } catch (error) {
        console.error(error);
      }
    }
    getMoviesInfo();
  }, [movieId]);

  return (
    <div>
      <img
        src={movies.poster_path ? baseUrl + movies.poster_path : defaultImg}
        alt={movies.title}
        width={250}
      />
    </div>
  );
};

export default MoviesDetails;
