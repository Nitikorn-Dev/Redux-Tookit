import React, { useEffect } from 'react'
import './Home.scss';
import { useAppDispatch} from '../../features/hooks';
import { fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';


function Home() {
const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  },[dispatch]);
  return (
    <>
   <MovieListing />
    </>
  )
}

export default Home