import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/home'
import './App.css';

require('dotenv').config()

const App = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
      </Switch>
    </Router>
  );
}

export default App;
