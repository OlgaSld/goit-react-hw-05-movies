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
      {movies.poster_path ? (
        <img
          src={baseUrl + movies.poster_path}
          alt={movies.title}
          width={250}
        ></img>
      ) : (
        <img src={defaultImg} alt={movies.title} width={250}></img>
      )}
      <div>
        <h2>{movies.title}</h2>
        <p>User Score: {movies.popularity}</p>
        <h3>Overview: {movies.overview}</h3>
      </div>
    </div>
  );
};

export default MoviesDetails;
