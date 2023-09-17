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
    if (!movieId) return;

    async function getMoviesCast() {
      try {
        const movieCast = await getMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error(error);
      }
    }
    getMoviesCast();
  }, [movieId]);

  return (
    <>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <Castitem key={id}>
          {profile_path ? (
            <img
              src={baseUrl + profile_path}
              alt={original_name}
              width={250}
            ></img>
          ) : (
            <img src={defaultImg} alt={original_name} width={250}></img>
          )}
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
