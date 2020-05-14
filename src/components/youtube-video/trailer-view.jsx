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
                        src={`http://www.youtube.com/embed/${props.match.params.videoId}?autoplay=1&mute=1`}
                        title={`video_title${props.match.params.videoId}`}
                        allow='autoplay'
                        className="trailersass" 
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
)

export default withRouter(TrailerView)