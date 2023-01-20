import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './moviedetails.css';

const MovieDetails = ({ movie }) => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();

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

  console.log(movieDetails);

  return <div>MOVIEDETAILS</div>;
};

export default MovieDetails;
