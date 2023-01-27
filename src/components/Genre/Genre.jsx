import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { populateGenre } from '../../utils/fetch';
import Movie from '../Movie/Movie';

const Genre = () => {
  const [movieData, setMovieData] = useState();
  const { genre } = useParams();
  const currentPage = 1;

  useEffect(() => {
    fetch(populateGenre(genre, currentPage))
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [genre, currentPage]);

  const movies = movieData?.results?.map((movie, idx) => (
    <Movie key={idx} movie={movie} />
  ));

  return <div className='container movies__wrapper'>{movies}</div>;
};

export default Genre;
