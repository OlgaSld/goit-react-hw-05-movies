import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Content } from './Reviews_styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getMoviesReviews() {
      try {
        const movieReview = await getMovieReviews(movieId, {
          signal: controller.signal,
        });
        setReviews(movieReview);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.error(error);
        }
      }
    }
    getMoviesReviews();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return reviews.length === 0 ? (
    <h3>We don`t have reviews for this movie</h3>
  ) : (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <Content>Author: {content}</Content>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
