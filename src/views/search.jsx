import React from 'react';
import {
    Link
} from "react-router-dom";

const Search = () => (
    <div id="main" className="search-main">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">Home</Link>
                    </li>
                </ul>

                <ul className="navbar-nav mr-auto justify-content-center">
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

        <div className="searchcontainer mt-5">
            <h1>Search</h1>

        </div>


    </div>
)

export default Search