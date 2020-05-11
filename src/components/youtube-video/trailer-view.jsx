import React from 'react';
import {
    Link
} from "react-router-dom";
import './trailer-view.sass'
import NavBar from '../navbar';

const TrailerView = () => (
    <div>
        <NavBar/>
        <div className="container playview">
            
            <div className="row">
                <div className="col-12">
                    <iframe 
                        src="http://www.youtube.com/embed/W7qWa52k-nE"
                        className="trailersass" 
                        allowfullscreen
                    />
                </div>
            </div>
        </div>
    </div>
)

export default TrailerView