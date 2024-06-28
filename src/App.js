import { useEffect, useState } from "react";
import './App.css' ;
import SearchIcon from './search.svg' ;
import MovieCard from "./MovieCard";

const API_URL='http://www.omdbapi.com?apikey=812c683f' ;




const App = () =>{

    const [movies,setmovies]=useState([]) ;
    const [searchTerm,setsearchTerm]=useState('') ;

    const search=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json() ;
        setmovies(data.Search) ;
    }


    useEffect(()=>{
        search("Superman") ;
    },[]) ;
    return(
        <div className="app">
            <h1>MovieMAX</h1>

            <div className="search">
                <input
                placeholder="What movie are you looking for?"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt='search'
                onClick={()=>search(searchTerm)}
                />
            
            </div>
            {
                movies?.length > 0 
                ?(
                    <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}
            </div>

                ) :
                (
                    <div className="empty">
                        <h2>NO MOVIES FOUND</h2>
                    </div>
                )
            }

            

        </div>
    );
}

export default App ;