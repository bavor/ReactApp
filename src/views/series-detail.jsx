import React from 'react';
import {
    Link,
} from "react-router-dom";
import axios from 'axios';
import NavBar from '../components/navbar';

class SeriesDetail extends React.Component{
    state={obj: null}

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/tv/${this.props.match.params.seriesId}?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&append_to_response=videos`)   
            .then(res => {
                this.setState({obj: res.data});
            });
    }

    render(){
        const { obj } = this.state
        return(
            <div style={{backgroundColor: '#6495ED'}}>
                <NavBar/>
                <div className="container my-4 py-3">
                    <div className="row">
                        <div className="col-7 ">
                            <h1>{obj?.original_name}</h1>
                            <h3 className="my-4">Description</h3>
                            <p>{obj?.overview}</p>

                            <h3>Release date</h3>
                            <p>{obj?.release_date}</p>
                            {console.log(obj)}
                            <Link to={`/series/${obj?.id}/videos/${obj?.videos?.results[0]?.key}`}>
                                <button className="bg-warning btn font-weight-bolder" type="button" value="Play button">Play video</button>
                            </Link>
                        </div>
                        <div className="col-5">
                        {this.state.obj && 
                            <img className="img-fluid" alt="obr" src={"https://image.tmdb.org/t/p/w500" + this.state.obj?.poster_path}></img>
                        }
                        </div>
                    </div>
                </div>

                <footer className="py-2" 
                    style={{backgroundColor: 'rgb(130,130,130)',
                    color: 'black',
                    textAlign: "center",
                }}>
                    For more info about this project visit
                    <a style={{color: 'rgb(230,230,230)'}} 
                        href="https://github.com/bavor/ReactApp"> GitHub
                    </a>
                </footer>
            </div>
        )
    }
}

export default SeriesDetail