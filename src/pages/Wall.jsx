import { useEffect, useState } from 'react';

const Wall = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  console.log(movies);

  return (
    <section>
      <div className='container'>Wall</div>
    </section>
  );
};

export default Wall;
