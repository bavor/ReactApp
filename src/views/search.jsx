import React from 'react';
import {
    Link
} from "react-router-dom";
import NavBar from '../components/navbar';
import axios from 'axios';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        alert('A name was submitted: ' + this.state.value);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a843f15dcd5fdd6b561a25e69749421a&language=en-US&query=${this.state.value}&page=1&include_adult=false`)   
            .then(res => {
                this.setState({objektik: res.data});
            });
    }

    render(){
        return(
            <div id="main" className="searchmain" style={{backgroundColor: '#6495ED'}}>
                <NavBar/>
                <div className="searchcontainer container mt-5">
                    <h1>Search</h1>
                    <form onSubmit={this.handleSubmit} className="search-form border border-dark rounded p-2 input=group">
                        <div className="row">
                            <div className="col-10">
                                <input className="input-lg form-control" type="text" id="searchinput" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="col-2">
                                <input type="submit" value="Search" className="px-5 py-1  bg-secondary text-white " />
                            </div>
                        </div>
                    </form><br></br>

                    <div className="resultscontainer mt-5">
                        <h2>Search results</h2> 
                        {console.log(this.state.objektik)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search