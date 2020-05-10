import React from 'react';

const MovieRow = (props) => ( 
    <div className="container con mt-3 ">
        <div className="row">
            {props.movies.map((movie, index) =>
                    <div className="col-1" key={index}>
                        <img className="img-fluid" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}></img>
                    <p>{movie.original_title}</p>
                    </div>
            )}
        </div>
    </div>
) 

export default MovieRow