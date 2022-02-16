import React from 'react';
import { useAppSelector } from '../../features/hooks';
import { getSelectMovie,getSelectShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import Slider from 'react-slick';
import {settings} from '../../common/settings';

function MovieListing() {
  const movies = useAppSelector(getSelectMovie);
  const shows = useAppSelector(getSelectShows);

   let renderMovies = movies.Response  === "True" && (movies.Search !== undefined)? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} movie={movie} />
    ))
  ):(
    <div className="movies-error">
      <h3>Error</h3>
    </div>
  )   
  
  let renderShows = shows.Response  === "True" && (shows.Search !== undefined)? (
    shows.Search.map((movie,index)=>(
      <MovieCard key={index} movie={movie} />
    ))
  ):(
    <div className="movies-error">
      <h3>Error</h3>
    </div>
  )
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
        <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing