import React from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";
import axios from 'axios';

class MovieDetail extends React.Component{
    state={obj: null}

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&append_to_response=videos`)   
            .then(res => {
                this.setState({obj: res.data});
            });
    }

    render(){
        const { obj } = this.state
        return(
            <div className="movie-detail" style={{backgroundColor: '#6495ED'}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav mr-auto justify-content-center">
                            <li className="nav-item ">
                                <h2 className="text-light ">Detail page</h2>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/search">Search</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container my-4 py-3">
                    <div className="row">
                        <div className="col-6 ">
                            <h1>{obj?.original_title}</h1>
                            <h3>Description</h3>
                            <p>{obj?.overview}</p>

                            <h3>Release date</h3>
                            <p>{obj?.release_date}</p>
                            {console.log(obj)}
                            <Link to={`/movies/${obj?.id}/videos/${obj?.videos?.results[0]?.key}`}>
                                <button className="bg-warning btn font-weight-bolder" type="button" value="Play button">Play video</button>
                            </Link>
                        </div>
                        <div className="col-6">
                        {this.state.obj && 
                            <img className="img-fluid" alt="obr" src={"https://image.tmdb.org/t/p/w500" + this.state.obj?.poster_path}></img>
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDetail)