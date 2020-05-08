import React from 'react';
import {
    Link
} from "react-router-dom";


const Index = () => (
    <div id="main" className="main">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">Home</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <h1 className="apptitle text-center p-3 mb-2 bg-warning text-dark">Select your movie</h1>

        <div className="container con1 mt-3 ">
            <h3>Popular movies</h3>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 1</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 2</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 3</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 4</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 5</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 6</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 7</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 8</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="container con2 mt-3">
            <h3>Popular series</h3>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 1</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 2</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 3</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 4</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 5</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 6</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 7</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 8</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="container con3 mt-3">
            <h3>Movie genres</h3>
            <h4>Family</h4>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 1</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 2</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 3</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 4</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 5</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 6</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 7</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 8</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="container con4 mt-1">
            <h4>Documentary</h4>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 1</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 2</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 3</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 4</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 5</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 6</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 7</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 8</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="container con5 mt-3">
            <h3>Series genres</h3>
            <h4>Family</h4>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 1</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 2</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 3</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 4</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 5</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 6</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 7</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 8</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="container con6 mt-1">
            <h4>Documentary</h4>
            <div class="row">
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 1</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 2</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 3</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 4</p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 5</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 6</p>
                        </div>
                            <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 7</p>
                        </div>
                        <div class="col-3">
                            <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                            <p>Film title 8</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div> /*MainDiv*/
)

export default Index