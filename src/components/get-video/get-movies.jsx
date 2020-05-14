import React from 'react';
import axios from 'axios';
import MovieRow from '../row/movie-row';

class GetMovies extends React.Component{
    constructor(props){
        super(props);
        this.state = {movies: []};
    }

    componentDidMount(){
        axios.get(this.props.refer)   
            .then(res => {
                this.setState({movies: res.data.results});
            });
    }

    render(){
        return(
            <div>
                <MovieRow  movies={this.state.movies}/>
            </div>
        )   
    }  
}

export default GetMovies
