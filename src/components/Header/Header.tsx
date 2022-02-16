import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss';
import user from '../../images/user.png';
import { useAppDispatch } from '../../features/hooks';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';


function Header() {
  const dispatch = useAppDispatch();
  const [searchInput,setSearchInput] =React.useState("");
  const submitHandle = (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    if(searchInput === "")return alert("Please Enter search");
    dispatch(fetchAsyncMovies(searchInput))
    dispatch(fetchAsyncShows(searchInput))
    setSearchInput("");

  }
  return (
    <div className="header">
        <div className="logo">
      <Link to="/">
          Movie App
      </Link>
        </div>
        <div className="search-bar">
          <form onSubmit={submitHandle}>
            <input type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
         <button type="submit">click</button>
          </form>
        </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header