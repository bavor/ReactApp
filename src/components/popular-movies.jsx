import React from 'react';
import axios from 'axios';
import MovieRow from './movie-row';

class PopularMovies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: []};
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&page=1`).then(res => {
            console.log(res.data.results);
            this.setState({movies: res.data.results});
        });
    }

    render(){
        return(
            <MovieRow title="Popular movies" movies={this.state.movies}/>
        )
        
    }
}

export default PopularMovies


