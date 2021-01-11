import React from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';

const handleFilter = (movies, filter) => {
  switch (filter) {
    case filter:
      return movies.filter((movie) => {
        let check = movie.title.toLowerCase().includes(filter);
        if (check) {
          return movie;
        }
      });

    default:
      return movies.filter((el) => el);
  }
};
const MovieList = () => {
  const movies = useSelector((state) => state.reducer.movies);
  const filter = useSelector((state) => state.reducer.filter);
  let newMovies = handleFilter(movies, filter);
  return (
    <div className='MovieList'>
      {newMovies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
      <MovieCard />
    </div>
  );
};

export default MovieList;
