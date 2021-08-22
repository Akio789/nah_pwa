import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './displays/Home/Home';
import Login from './displays/Login/Login';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;