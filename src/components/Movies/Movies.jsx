import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Movie from '../Movie/Movie';

const Movies = ({ setMovieDetails }) => {
  const [movieData, setMovieData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  // Get all Movies for Home Page
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [currentPage]);

  const movies = movieData?.results?.map((movie, idx) => (
    <Movie key={idx} movie={movie} />
  ));

  const pageCount = 500;
  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div>
      <div className='container'>
        <div className='movies__wrapper'>{movies}</div>
        <div className='paginate__wrapper'>
          <ReactPaginate
            onPageChange={paginate}
            pageCount={pageCount}
            previousLabel={'Prev'}
            nextLabel={'Next'}
            containerClassName={'pagination'}
            pageLinkClassName={'page-number'}
            previousLinkClassName={'prev'}
            nextLinkClassName={'next'}
            activeLinkClassName={'active'}
            breakClassName={'page-number'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
