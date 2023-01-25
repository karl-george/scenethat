import { useNavigate } from 'react-router-dom';
import './movie.css';

const Movie = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const nameSliced = movie.title.slice(0, 35);
  const navigate = useNavigate();

  return (
    <div
      className='movie__container'
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img className='movie__img' src={imageURL} />
      <div className='movie__details'>
        <p className='movie__title'>{nameSliced}</p>
        <p className='movie__rating'>{movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default Movie;
