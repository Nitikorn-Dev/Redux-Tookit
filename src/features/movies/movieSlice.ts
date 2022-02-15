import { createSlice, PayloadAction, } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
    }
});

//Actions
export const {addMovie} = movieSlice.actions;

//Selects
export const selectMovie = (state:RootState)=> state.movie;

export default movieSlice.reducer;
