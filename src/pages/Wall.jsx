import { useEffect, useState } from 'react';
import Movie from '../components/Movie/Movie';

const Wall = () => {
  const [movieData, setMovieData] = useState();
  const [movieId, setMovieId] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  const getMovieId = (id) => {
    setMovieId(id);
  };

  const movies = movieData?.results?.map((movie, idx) => (
    <Movie key={idx} movie={movie} getMovieId={getMovieId} />
  ));

  return (
    <section>
      <div className='container'>
        <div className='movies__wrapper'>{movies}</div>
      </div>
    </section>
  );
};

export default Wall;
