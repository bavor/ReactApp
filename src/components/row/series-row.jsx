import React from 'react';
import {
    Link
} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './series-row.sass'

const SeriesRow = (props) => {

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
        <div className="container con mt-3 mb-5">
            <div className="row">
                <div className="col-12">
                    <div className="serie-row__carousel">
                        <Carousel responsive={responsive}>
                            {props.series.map((serie, index) =>
                                <div key={index}>
                                    {serie.poster_path && 
                                        <img className="img-fluid serie-row__carousel-img" alt="picture" src={"https://image.tmdb.org/t/p/w500" + serie.poster_path}></img>
                                    }
                                    {!serie.poster_path && 
                                        <img className="img-fluid serie-row__carousel-img" alt="picture" src={"https://developers.google.com/maps/documentation/maps-static/images/error-image-generic.png?hl=es"}></img>
                                    }
                                    <Link to={`/series/${serie.id}`} className="text-dark" >{serie.original_name}</Link>
                                </div>
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

SeriesRow.defaultProps = {
    series: [],
}

export default SeriesRow