import { useEffect, useState, useRef, Suspense } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieId } from 'api';
import BackLink from 'components/BackLink/BackLink';
import {
  AddInfoWrapper,
  Container,
  GenresList,
  Link,
} from './MoviesDetails_styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

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
    <>
      <BackLink to={backLinkLocationRef.current}>Go Back</BackLink>

      <Container>
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
          <h3>Overview:</h3>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {movies.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </div>
      </Container>
      <AddInfoWrapper>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </AddInfoWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
