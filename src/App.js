import React, { useEffect, useState } from 'react';
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
import Dictionary from './displays/Dictionary/Dictionary';
import Register from './displays/Register/Register';
import { getLatestLesson } from './api/latestLesson';

const App = () => {
  const [latestLesson, setLatestLesson] = useState(1);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      getLatestLesson(user.email)
        .then(({ latest_lesson }) => setLatestLesson(latest_lesson))
    }
  }, [user])

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
          <Header latestLesson={latestLesson} />
          <ProtectedRoute path="/lecciones/:latestLesson" component={Lecciones} />
          <ProtectedRoute path='/home' component={() => <Home latestLesson={latestLesson} />} />
          <ProtectedRoute path='/codex/:id' component={Codex} />
          <ProtectedRoute path='/test' component={TestAudio} />
          <ProtectedRoute path='/dictionary' component={Dictionary} />
        </>
      </Switch>
    </Router>
  )
}

export default App;