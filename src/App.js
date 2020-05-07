import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
    return (
        <div id="main">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">ZdendoTestApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Search <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    
                </div>
            </nav>

            <h1 className="apptitle">APP TITLE</h1>

            
        </div> /*MainDiv*/



        
    )
}

export default App