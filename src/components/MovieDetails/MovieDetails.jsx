import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie, getRecommended } from '../../utils/fetch';
import Movie from '../Movie/Movie';
import './moviedetails.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [recommended, setRecommended] = useState();
  const { movieId } = useParams();

  // API only provides the end of the image path
  const imageURL = `https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`;
  const posterURL = `https://image.tmdb.org/t/p/w300/${movieDetails?.poster_path}`;

  const production = movieDetails?.production_companies?.map(
    (company) => company.name
  );

  const countries = movieDetails?.production_countries?.map(
    (country) => country.name
  );

  const genres = movieDetails?.genres?.map((genre) => genre.name);

  // Call API for specific movie details
  useEffect(() => {
    fetch(getMovie(movieId))
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, [movieId]);

  useEffect(() => {
    fetch(getRecommended(movieId))
      .then((res) => res.json())
      .then((data) => setRecommended(data));
  }, [movieId]);

  const recommendedMovies = recommended?.results?.map((movie, idx) => (
    <Movie key={idx} movie={movie} />
  ));

  return (
    <div>
      {movieDetails && (
        <div className='moviedetails'>
          <img className='moviedetails__bg' src={imageURL} />
          <div className='container moviedetails__content'>
            <img className='moviedetails__poster' src={posterURL} />
            <div className='moviedetails__content_column'>
              <h2 className='moviedetails__title'>{movieDetails.title}</h2>
              {movieDetails.tagline && (
                <p className='moviedetails__tagline'>
                  "{movieDetails.tagline}"
                </p>
              )}
              <p className='moviedetails__overview'>{movieDetails.overview}</p>
              <p className='moviedetails__runtime'>
                <span className='bold'>Runtime:</span> {movieDetails.runtime}{' '}
                min
              </p>
              <div className='moviedetails__content__row'>
                <p className='moviedetails__release'>
                  <span className='bold'>Released:</span>
                  {movieDetails.release_date}
                </p>
                <p className='moviedetails__rating'>
                  <span className='bold'>Rating:</span>
                  {movieDetails.vote_average.toFixed(1)}
                </p>
              </div>
              <div className='moviedetails__content__row'>
                <p className='moviedetails__genre'>
                  <span className='bold'>Genre:</span>
                  {genres.join(', ')}
                </p>
              </div>
              <div className='moviedetails__content__row'>
                <p className='moviedetails__production'>
                  <span className='bold'>Production:</span>
                  {production.join(', ')}
                </p>
              </div>
              <div className='moviedetails__content__row'>
                <p className='moviedetails__countries'>
                  <span className='bold'>Country:</span>
                  {countries.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='container '>
        <h3 className='recommended__title'>
          Movies Like {movieDetails?.title}
        </h3>
        <div className='moviedetails__recommended'>{recommendedMovies}</div>
      </div>
    </div>
  );
};

export default MovieDetails;
