import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../apis/movieApi";
import { RootState } from "../store";
import { APIkey } from "../../apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (search:string)=> {
        
        const response = await movieApi.get(`?apiKey=${APIkey}&s=${search}&type=movie`);
    return response.data;
    }
)

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async (search:string)=> {
        
        const response = await movieApi.get(`?apiKey=${APIkey}&s=${search}&type=series`);
    return response.data;
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail',
    async (id:any)=> {
        const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&plot=full`);
    return response.data;
    }
);


interface MovieState {
    movies:{
        Response?:string,
        Search?:Movie[],
        totalResults?:string
    },
    show:{
        Response?:string,
        Search?:Movie[],
        totalResults?:string
    },
    selectMovieOrShow:{
        Title?:string;
        imdbRating?:string;
        imdbVotes?:string;
        Runtime?:string;
        Year?:string;
        Plot?:string;
        Director?:string;
        Actors?:string;
        Genre?:string;
        Language?:string;
        Awards?:string;
        Poster?:string;
    }
}


const initialState:MovieState = {
    movies:{},
    show:{},
    selectMovieOrShow:{}
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeSelectedMovieOrShow:(state)=>{
            state.selectMovieOrShow = {}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAsyncMovies.pending,(state,action)=>{
            // console.log(action.payload)
        });

        builder.addCase(fetchAsyncMovies.fulfilled,(state,action)=>{
            state.movies = action.payload
        });

        builder.addCase(fetchAsyncMovies.rejected,(state,action)=>{
            console.log(action.payload)
        });
        builder.addCase(fetchAsyncShows.fulfilled,(state,action)=>{
            state.show = action.payload
        });
        builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled,(state,action)=>{
            state.selectMovieOrShow = action.payload
        });
        
    }

});

//Action
export const {removeSelectedMovieOrShow} = movieSlice.actions;
//Selects
export const getSelectMovie = (state:RootState)=> state.movie.movies;
export const getSelectShows = (state:RootState)=> state.movie.show;
// export const getSelectMovieOrShow = 

export default movieSlice.reducer;
