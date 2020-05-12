import React from 'react';
import {
    Link
} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './series-row.sass'

function SeriesRow(props) {

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
        <div className="container con mt-3 mb-5 ">
            <div className="row">
                <div className="col-12">
                    <div className="serie-row__carousel">
                        <Carousel responsive={responsive}>
                            {props.series.map((serie, index) =>
                                <div key={index}>
                                    <img className="img-fluid serie-row__carousel-img" alt="obr" src={"https://image.tmdb.org/t/p/w500" + serie.poster_path}></img>
                                    <Link to={`/movies/${serie.id}`} className="text-dark" >{serie.original_name}</Link>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeriesRow