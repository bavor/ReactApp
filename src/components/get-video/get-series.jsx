import React from 'react';
import axios from 'axios';
import SeriesRow from '../row/series-row';

class GetSeries extends React.Component{
    constructor(props){
        super(props);
        this.state = {series: []};
    }

    componentDidMount(){
        axios.get(this.props.refer)   
        .then(res => {
                this.setState({series: res.data.results});
            });
    }

    render(){
        return(
            <div>
                <SeriesRow series={this.state.series}/>
            </div>
        )   
    }  
}

export default GetSeries