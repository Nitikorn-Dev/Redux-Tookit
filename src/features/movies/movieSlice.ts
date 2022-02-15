import { createAsyncThunk, createSlice, PayloadAction, } from "@reduxjs/toolkit";
import movieApi from "../../apis/movieApi";
import { RootState } from "../store";
import { APIkey } from "../../apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async ()=> {
        const movieText = 'Harry';
        const response = await movieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
    return response.data;
    }
)


interface MovieState {
    Response:string;
    movies:Movie[]
}
const initialState:MovieState = {
    Response:'False',
    movies:[]
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovie:(state,action:PayloadAction<{Response:string,Search:Movie[]}>)=> {
            console.log(action.payload)
            state.movies = action.payload.Search;
            state.Response = action.payload.Response;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAsyncMovies.pending,(state,action)=>{
            console.log(action.payload)
        });

        builder.addCase(fetchAsyncMovies.fulfilled,(state,action:PayloadAction<{Response:string,Search:Movie[]}>)=>{
            console.log(state)
            state.movies = action.payload.Search;
            state.Response = action.payload.Response;
        });

        builder.addCase(fetchAsyncMovies.rejected,(state,action)=>{
            console.log(action.payload)
        })
        
    }

});

//Actions
export const {addMovie} = movieSlice.actions;

//Selects
export const selectMovie = (state:RootState)=> state.movie;

export default movieSlice.reducer;
