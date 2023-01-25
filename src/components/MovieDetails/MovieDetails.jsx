import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './moviedetails.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();

  // API only provides the end of the image path
  const imageURL = `https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`;
  const posterURL = `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`;

  const production = movieDetails?.production_companies?.map(
    (company) => company.name
  );

  const countries = movieDetails?.production_countries?.map(
    (country) => country.name
  );

  // Call API for specific movie details
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <div className='moviedetails'>
          <img className='moviedetails__bg' src={imageURL} />
          <div className='container moviedetails__content'>
            <img className='moviedetails__poster' src={posterURL} />
            <div className='moviedetails__content_column'>
              <h2 className='moviedetails__title'>
                {movieDetails.original_title}
              </h2>
              <p className='moviedetails__overview'>{movieDetails.overview}</p>
              <p className='moviedetails__rating'>{movieDetails.popularity}</p>
              <p className='moviedetails__release'>
                {movieDetails.release_date}
              </p>
              <p className='moviedetails__runtime'>{movieDetails.runtime}</p>
              <p className='moviedetails__runtime'>{production.join(', ')}</p>
              <p className='moviedetails__runtime'>{countries.join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
