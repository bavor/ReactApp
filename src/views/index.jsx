import React from 'react';
import {
    Link
} from "react-router-dom";
import GetMovies from '../components/get-video/get-movies';
import GetSeries from '../components/get-video/get-series';
import NavBar from '../components/navbar';

const Index = () => (
    <div id="main" className="main" style={{backgroundColor: '#6495ED'}}>
        <NavBar/>
        <div className="container">
            <h3 className="mt-2 ">Popular movies</h3>
                <GetMovies refer="https://api.themoviedb.org/3/movie/popular?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&page=1"/>
            <h3 className="pt-3">Popular series</h3>
                <GetSeries refer="https://api.themoviedb.org/3/tv/popular?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&page=1"/>

            <h3 className="pt-3 ">Movie genres</h3>
            <h4>Family</h4>
                <GetMovies refer="https://api.themoviedb.org/3/discover/movie?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"/>
            <h4>Documentary</h4>
                <GetMovies refer="https://api.themoviedb.org/3/discover/movie?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"/>

            <h3 className="pt-3">Series genres</h3>
            <h4>Family</h4>
                <GetSeries refer="https://api.themoviedb.org/3/discover/tv?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751"/>
            <h4>Documentary</h4>
                <GetSeries refer="https://api.themoviedb.org/3/discover/tv?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99"/> 
        </div>
        <footer className="py-2" 
                    style={{backgroundColor: 'rgb(130,130,130)',
                    color: 'black',
                    textAlign: "center",
                }}>
                    For more info about this project visit
                    <a style={{color: 'rgb(230,230,230)'}} 
                        href="https://github.com/bavor/ReactApp"> GitHub
                    </a>
                </footer>
    </div> /*MainDiv*/
)

export default Index