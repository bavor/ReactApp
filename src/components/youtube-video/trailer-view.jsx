import React from 'react';
import {
    withRouter
} from "react-router-dom";
import './trailer-view.sass'
import NavBar from '../navbar';

const TrailerView = (props) => (
    <div>
        <NavBar/>
        <div className="container playview">
            
            <div className="row">
                <div className="col-12">
                    <iframe
                        src={`http://www.youtube.com/embed/${props.match.params.videoId}`}
                        className="trailersass" 
                        allowfullscreen
                    />
                </div>
            </div>
        </div>
    </div>
)

export default withRouter(TrailerView)