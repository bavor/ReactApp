import React from 'react';
import './App.sass';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Search from './views/search';
import Index from './views/index';
import MovieDetail from './views/movie-detail';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/movies/:movieId" component={MovieDetail}/>
            <Route exact path="/series/:seriesId" component={MovieDetail}/>
        </Switch>
    </Router>

)

export default App