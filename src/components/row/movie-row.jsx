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
                    <div className="Appnew">
                        <Carousel responsive={responsive}>
                            <div className="App__item">Item 1</div>
                            <div className="App__item">Item 2</div>
                            <div className="App__item">Item 3</div>
                            <div className="App__item">Item 4</div>
                            <div className="App__item">Item 5</div>
                        </Carousel>
                    </div>
                </div>
 
                {props.movies.map((movie, index) =>
                        <div className="col-1" key={index}>
                            <img className="img-fluid legend" alt="obr" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}></img>
                        <Link to={`/movies/${movie.id}`} className="text-dark" >{movie.original_title}</Link>
                        </div>
                )}
                
            </div>
        </div>
    )
}

export default MovieRow



