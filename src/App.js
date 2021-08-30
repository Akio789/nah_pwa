import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import Home from './displays/Home/Home';
import Login from './displays/Login/Login';
import Header from './components/Header/Header';
import ProtectedRoute from "./components/Auth/ProtectedRoute";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <ProtectedRoute path='/home' component={Home} />
      </Switch>
    </Router>
  )
}

export default withAuthenticator(App);