import React, { useEffect } from 'react'
import './Home.scss';
import movieApi from '../../apis/movieApi';
import { APIkey } from '../../apis/movieApiKey';
import { useAppDispatch } from '../../features/hooks';
import { addMovie} from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';


function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovie = async () => {
      const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
      dispatch(addMovie(response.data));
    }
    fetchMovie();
  }, [dispatch])
  return (
    <>
      <MovieListing />
    </>
  )
}

export default Home