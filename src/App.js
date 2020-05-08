import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Search from './views/search';
import Index from './views/index';


const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/search" component={Search}/>
        </Switch>
    </Router>
)

export default App