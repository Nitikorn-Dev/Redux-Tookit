import React, { useEffect } from 'react'
import './Home.scss';
import { useAppDispatch} from '../../features/hooks';
import { fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
import {Outlet} from 'react-router-dom';


function Home() {
const dispatch = useAppDispatch();
const movieText = 'Harry';
const seriesText = 'Friends';
  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
  },[dispatch]);
  return (
    <>
   {/* <MovieListing /> */}
   <Outlet />
    </>
  )
}

export default Home