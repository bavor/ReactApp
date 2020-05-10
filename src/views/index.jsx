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

        <div className="container">
            <h3>Popular movies</h3>
                <PopularMovies refer="https://api.themoviedb.org/3/movie/popular?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&page=1"/>
            <h3>Popular series</h3>
                <PopularMovies refer="https://api.themoviedb.org/3/tv/popular?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&page=1"/>

            <h3>Movie genres</h3>
            <h4>Family</h4>
                <PopularMovies refer="https://api.themoviedb.org/3/discover/movie?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"/>
            <h4>Documentary</h4>
                <PopularMovies refer="https://api.themoviedb.org/3/discover/movie?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"/>

            <h3>Series genres</h3>
            <h4>Family</h4>
                <PopularMovies refer="https://api.themoviedb.org/3/discover/tv?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"/>
            <h4>Documentary</h4>
                <PopularMovies refer="https://api.themoviedb.org/3/discover/tv?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"/>
        </div>
    </div> /*MainDiv*/
)

export default Index