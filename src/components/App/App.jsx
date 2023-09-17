import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import SharedLayout from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />} />
          {/* <Route path="reviews" element={<Reviews />} />
        <Route path="cast" element={<Cast />} /> */}
        </Route>
      </Routes>
    </>
  );
};
