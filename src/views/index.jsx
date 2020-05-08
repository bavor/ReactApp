import React from 'react';
import {
    Link
} from "react-router-dom";
import MovieRow from '../components/movie-row';

const Index = () => (
    <div id="main" className="main">
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

        <MovieRow title="Popular movies" url="https://api.themoviedb.org/3/movie/popular?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&page=1"/>
        <MovieRow title="Popular series" />
        <MovieRow title="Movie genres" subtitle="Family"/>
        <MovieRow subtitle="Documentary"/>
        <MovieRow title="Series genres" subtitle="Family"/>
        <MovieRow subtitle="Documentary"/>
    </div> /*MainDiv*/
)

export default Index