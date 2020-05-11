import React from 'react';
import {
    Link
} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';


const MovieRow = (props) => ( 
    <div className="container con mt-3 ">
        <div className="row">
            {props.movies.map((movie, index) =>
                    <div className="col-1" key={index}>
                        <img className="img-fluid legend" alt="obr" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}></img>
                    <Link to={`/movies/${movie.id}`} className="text-dark" >{movie.original_title}</Link>
                    </div>
            )}
        </div>
    </div>
) 

export default MovieRow