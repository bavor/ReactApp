import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from '../components/navbar';

const Search = () => (
    
    <div id="main" className="searchmain" style={{backgroundColor: '#6495ED'}}>
        <NavBar/>
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
            </div>
        </div>
    </div>
)

export default Search