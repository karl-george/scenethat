import { Routes, Route } from 'react-router-dom';
import Genre from '../components/Genre/Genre';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Movies from '../components/Movies/Movies';
import './wall.css';

const Wall = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movie/:movieId' element={<MovieDetails />} />
        <Route path='/genre/:genre' element={<Genre />} />
      </Routes>
    </section>
  );
};

export default Wall;
