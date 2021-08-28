import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

import Home from './displays/Home/Home';
import Login from './displays/Login/Login';
import Header from './components/Header/Header';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <Router>
      <Header />
      <AmplifySignOut />
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

export default withAuthenticator(App);