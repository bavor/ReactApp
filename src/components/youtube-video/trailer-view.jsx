import React from 'react';
import {
    Link
} from "react-router-dom";
import './trailer-view.sass'

const TrailerView = () => (

    <div className="container playview">
        <div className="row">
            <div className="col-12">
                <iframe 
                    src="http://www.youtube.com/embed/W7qWa52k-nE"
                    className="embed-responsive " 
                    allowfullscreen
                />
            </div>
        </div>
    </div>
)

export default TrailerView