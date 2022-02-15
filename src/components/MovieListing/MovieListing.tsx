import React from 'react';
import { useAppSelector } from '../../features/hooks';
import { selectMovie } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

function MovieListing() {
  const {movies,Response} = useAppSelector(selectMovie);

   let renderMovies = Response === "True"?(
    movies.map((movie,index)=>(
      <MovieCard key={index} movie={movie} />
    ))
  ):(
    <div className="movies-error">
      <h3>Error</h3>
    </div>
  )
  // console.log(movies,Response)

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies}
        </div>
      </div>
    </div>
  )
}

export default MovieListing