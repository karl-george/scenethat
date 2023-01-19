import { useEffect, useState } from 'react';
import Movie from '../components/Movie/Movie';
import ReactPaginate from 'react-paginate';

const Wall = () => {
  const [movieData, setMovieData] = useState();
  const [movieId, setMovieId] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 20;
  const offset = currentPage * moviesPerPage;
  const currentMovies = movieData?.results?.slice(
    offset,
    offset + moviesPerPage
  );

  const pageCount = 500;

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [currentPage]);

  const getMovieId = (id) => {
    setMovieId(id);
  };

  const movies = movieData?.results?.map((movie, idx) => (
    <Movie key={idx} movie={movie} getMovieId={getMovieId} />
  ));

  console.log(movieData);

  return (
    <section>
      <div className='container'>
        <div className='movies__wrapper'>{movies}</div>
        <ReactPaginate
          onPageChange={paginate}
          pageCount={pageCount}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          containerClassName={'pagination'}
          pageLinkClassName={'page-number'}
          previousLinkClassName={'page-number'}
          nextLinkClassName={'page-number'}
          activeLinkClassName={'active'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          renderOnZeroPageCount={null}
        />
        {currentMovies}
      </div>
    </section>
  );
};

export default Wall;
