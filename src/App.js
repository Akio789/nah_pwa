import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './displays/Home/Home';
import Codex from './displays/Codex/Codex';
import Login from './displays/Login/Login';
import Header from './components/Header/Header';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Lecciones from './displays/Lecciones/Lecciones';
import TestAudio from './displays/TestAudio';

const App = () => {

  const renderHeader = () => {
    if (window.location.pathname === '/') {
      return;
    }
    return <Header />;
  };

  return (
    <Router>
      {renderHeader()}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path='/lecciones' component={Lecciones} />
        <ProtectedRoute path='/home' component={Home} />
        <Route path='/codex/:id' component={Codex} />
        <Route path='/test'>
          <TestAudio />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;