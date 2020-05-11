import React from 'react';
import {
    Link
} from "react-router-dom";

const SeriesRow = (props) => ( 
    <div className="container con mt-3 ">
        <div className="row">
            {props.series.map((serie, index) =>
                    <div className="col-1" key={index}>
                        <img className="img-fluid" alt="obr" src={"https://image.tmdb.org/t/p/w500" + serie.poster_path}></img>
                    <Link to={`/series/${serie.id}`} className="text-dark" >{serie.original_name}</Link>
                    </div>
            )}
        </div>
    </div>
) 

export default SeriesRow