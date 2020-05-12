import React from 'react';
import './App.sass';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Search from './views/search'
import Index from './views/index'
import MovieDetail from './views/movie-detail'
import SeriesDetail from './views/series-detail'
import TrailerView from './components/youtube-video/trailer-view'

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/movies/:movieId" component={MovieDetail}/>
            <Route exact path="/movies/:movieId/videos/:videoId" component={TrailerView}/>
            <Route exact path="/series/:seriesId" component={SeriesDetail}/>
            <Route exact path="/series/:seriesId/videos/:videoId" component={TrailerView}/>
        </Switch>
    </Router>

)

export default App