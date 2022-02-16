import { Navigate, useRoutes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieListing from "./components/MovieListing/MovieListing";
import PageNotFound from "./components/PageNotFound/PageNotFound";

export default function Router(){
    return useRoutes([
        {
            path:'/',element:<Home />,
            children:[
                {
                    index:true,element:<MovieListing />
                },
                {
                    path:'/movie/:imdbID',element:<MovieDetail />
                },
            ]
        },
        {
            path:'notfound',element:<PageNotFound />
        },
        {
            path:'*',element:<Navigate to="/notfound" replace />
        }
    ])
}