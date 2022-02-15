import { Navigate, useRoutes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

export default function(){
    return useRoutes([
        {
            path:'/' ,index:true,element:<Home />,
        },
        {
            path:'/movie/:imdbID',element:<MovieDetail />
        },
        {
            path:'notfound',element:<PageNotFound />
        },
        {
            path:'*',element:<Navigate to="/notfound" replace />
        }
    ])
}