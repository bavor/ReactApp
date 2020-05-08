import React from 'react';
import axios from 'axios';

class MovieRow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get(this.props.url)

    }
    
    render() {
        return(   
            <div className="container con mt-3 ">
                {this.props.title &&
                <h3>{this.props.title}</h3>
                }

                {this.props.subtitle && 
                <h4>{this.props.subtitle}</h4>
                }
                
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
    }
}

export default MovieRow