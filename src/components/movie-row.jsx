import React from 'react';

const MovieRow = (props) => ( 
    <div className="container con mt-3 ">
        {props.title &&
        <h3>{props.title}</h3>
        }

        {props.subtitle && 
        <h4>{props.subtitle}</h4>
        }
        
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 1</p>
                    </div>
                    <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 2</p>
                    </div>
                        <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 3</p>
                    </div>
                    <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 4</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 5</p>
                    </div>
                    <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 6</p>
                    </div>
                        <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 7</p>
                    </div>
                    <div className="col-3">
                        <img className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/71kNvlpS9GL._AC_SX466_.jpg" alt="cat"></img>
                        <p>Film title 8</p>
                    </div>
                </div>
            </div>  
        </div>

    </div>
) 

export default MovieRow