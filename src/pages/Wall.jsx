import { Routes, Route } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Movies from '../components/Movies/Movies';
import './wall.css';

const Wall = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movie/:movieId' element={<MovieDetails />} />
      </Routes>
    </section>
  );
};

export default Wall;
