import React from 'react';
import {
    Link
} from "react-router-dom";
import PopularMovies from '../components/popular-movies';

const Index = () => (
    <div id="main" className="main" style={{backgroundColor: '#6495ED'}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">Home</Link>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto justify-content-center">
                    <li className="nav-item ">
                        <h2 className="text-light ">Select your video content</h2>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/search">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <PopularMovies/>

        {/* <MovieRow title="Popular series" />
        <MovieRow title="Movie genres" subtitle="Family"/>
        <MovieRow subtitle="Documentary"/>
        <MovieRow title="Series genres" subtitle="Family"/>
        <MovieRow subtitle="Documentary"/> */}
    </div> /*MainDiv*/
)

export default Index