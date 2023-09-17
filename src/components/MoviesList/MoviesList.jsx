import { Link, MovieItem, MovieList } from './MoviesList_styled';

const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <MovieList>
      {movies.map(({ id, original_title }) => {
        return (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;
