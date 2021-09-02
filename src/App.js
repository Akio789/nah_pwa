import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './displays/Home/Home';
import Login from './displays/Login/Login';
import Header from './components/Header/Header';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Lecciones from './displays/Lecciones/Lecciones';
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
        <Route exact path="/lecciones">
          <Lecciones />
        </Route>
        <ProtectedRoute path='/home' component={Home} />
      </Switch>
    </Router>
  )
}

export default App;