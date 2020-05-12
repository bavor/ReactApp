import React from 'react';
import {
    Link
} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './movie-row.sass'

function MovieRow(props) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    }

    return (
        <div className="container con mt-3 ">
            <div className="row">
                <div className="col-12">
                    <div className="movie-row__carousel">
                        <Carousel responsive={responsive}>
                            {props.movies.map((movie, index) =>
                                <div key={index}>
                                    <img className="img-fluid movie-row__carousel-img" alt="obr" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}></img>
                                    <Link to={`/movies/${movie.id}`} className="text-dark" >{movie.original_title}</Link>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieRow



