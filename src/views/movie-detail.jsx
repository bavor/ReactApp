import React from 'react';
import {
    Link,
    withRouter
} from "react-router-dom";
import axios from 'axios';


class MovieDetail extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US`)   
            .then(res => {
                // console.log(res.data);
                this.setState({obj: res.data});
            });
    }

    render(){
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

                <div className="container">
                    {console.log(this.state)}
                    <h1>url je:{`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US`}</h1>
                    <div className="row">
                        <div className="col-6">
                            <h1>Title: this.State.obj.original_title</h1>
                            <h3>Description</h3>
                            <p>this.State.obj.overview</p>

                            <h3>Metadata</h3>
                            <p>wtf should be here?</p>

                            <form>
                                <input className="bg-warning" type="submit" value="Play button"/>
                            </form>
                        </div>
                        <div className="col-6">
                        {/* <img className="img-fluid" alt="obr" src={"https://image.tmdb.org/t/p/w500" + this.state.obj.poster_path}></img> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDetail)