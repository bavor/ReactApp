import React from 'react';
import axios from 'axios';
import MovieRow from './movie-row/movie-row';

class PopularMovies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: []};
    }

    componentDidMount(){
        axios.get(this.props.refer)   
        .then(res => {
                console.log(res.data.results);
                this.setState({movies: res.data.results});
            });
    }

    render(){
        return(
            <div>
                <MovieRow movies={this.state.movies}/>
            </div>
        )   
    }  
}

export default PopularMovies
