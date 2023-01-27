// Fetch all movies from movie API
export const allMovies = (currentPage) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`;
};

// Fetch specific movie
export const getMovie = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`;
};

// Fetch specific movies recommended
export const getRecommended = (movieId) => {
  return `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1`;
};

// Fetch movies of a genre
export const populateGenre = (genre, currentPage) => {
  return `
  https://api.themoviedb.org/3/discover/movie?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genre}&page=${currentPage}`;
};

// Fetch a list of the genres
export const getGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
  import.meta.env.VITE_API_KEY
}&language=en-US`;
