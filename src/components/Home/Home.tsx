import React, { useEffect } from 'react'
import './Home.scss';
import movieApi from '../../apis/movieApi';
import {APIkey} from '../../apis/movieApiKey';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { addMovie, selectMovie,fetchAsyncMovies } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';


function Home() {
const movies = useAppSelector(selectMovie);
const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchAsyncMovies())
    // const movieText = 'Harry';
    // const fetchMovie = async ()=> {
    //   const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
    //   dispatch(addMovie(response.data));
    // }
    // fetchMovie()
  },[dispatch])
  return (
    <>
   <MovieListing />
    </>
  )
}

export default Home