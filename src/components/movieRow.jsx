import React from 'react';
import {
    Link
} from "react-router-dom";


const MovieRow = () => (
    <div className="container con mt-3 ">
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
)

export default MovieRow