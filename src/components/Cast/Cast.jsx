import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api';
import { Castitem, Character } from './Cast_styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    const controller = new AbortController();

    if (!movieId) return;

    async function getMoviesCast() {
      try {
        const movieCast = await getMovieCast(movieId, {
          signal: controller.signal,
        });
        setCast(movieCast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.error(error);
        }
      }
    }
    getMoviesCast();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <Castitem key={id}>
          <img
            src={profile_path ? baseUrl + profile_path : defaultImg}
            alt={original_name}
            width={250}
          />
          <div>
            <h2>{original_name}</h2>
            <h3>
              Character: <Character>{character}</Character>
            </h3>
          </div>
        </Castitem>
      ))}
    </>
  );
};

export default Cast;
