import React from 'react';
import {
    Link
} from "react-router-dom";
import PopularMovies from '../components/popular-movies';

const Search = () => (
    
    <div id="main" className="searchmain" style={{backgroundColor: '#6495ED'}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">Home</Link>
                    </li>
                </ul>

                <ul className="navbar-nav justify-content-center">
                    <li className="nav-item ">
                        <h2 className="text-light ">Search page</h2>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/search">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="searchcontainer container mt-5">
            <h1>Search</h1>
            <form className="search-form border border-dark rounded p-2 input=group">
                <div className="row">
                    <div className="col-10">
                        <input className="input-lg form-control" type="text" id="searchinput" />
                    </div>
                    <div className="col-2">
                        <input type="submit" value="Search" className="px-5 py-1  bg-secondary text-white " />
                    </div>
                </div>
            </form><br></br>

            <div className="resultscontainer mt-5">
                <h2>Search results</h2>
                <PopularMovies/>
            </div>
        </div>


    </div>
)

export default Search