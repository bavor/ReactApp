import React from 'react';
import {
    Link
} from "react-router-dom";

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/">Home</Link>
                </li>
            </ul>

            <ul className="navbar-nav justify-content-center">
                <li className="nav-item ">
                    <h2 className="text-light ">React App</h2>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/search">Search</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar