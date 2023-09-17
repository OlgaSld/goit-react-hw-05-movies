import { useLocation } from 'react-router-dom';
import { Link, MovieItem, MovieList } from './MoviesList_styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <MovieList>
      {movies.map(({ id, original_title }) => {
        return (
          <MovieItem key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {original_title}
            </Link>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;
