import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './displays/Home/Home';
import Codex from './displays/Codex/Codex';
import Login from './displays/Login/Login';
import Header from './components/Header/Header';
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Lecciones from './displays/Lecciones/Lecciones';
import TestAudio from './displays/TestAudio';
import Dictionary from './displays/Dictionary/Dictionary';
import Register from './displays/Register/Register';
import AboutUs from './displays/AboutUs/AboutUs';
import Culture from './displays/Culture/Culture';
import Tales from './displays/Tales/Tales';
import Maps from './displays/Maps/Maps';
import ML from './displays/ML/ML';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <>
          <Header />
          <ProtectedRoute path="/lecciones/:latestLesson" component={Lecciones} />
          <ProtectedRoute path='/home' component={() => <Home />} />
          <ProtectedRoute path='/codex/:id' component={Codex} />
          <ProtectedRoute path='/test' component={TestAudio} />
          <ProtectedRoute path='/dictionary' component={Dictionary} />
          <ProtectedRoute path='/about-us' component={AboutUs} />
          <ProtectedRoute path='/culture' component={Culture} />
          <ProtectedRoute path='/cult/:id' component={Tales} />
          <ProtectedRoute path='/maps' component={Maps} />
          <ProtectedRoute path='/ml' component={ML} />
        </>
      </Switch>
    </Router>
  )
}

export default App;