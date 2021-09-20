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
import { getLatestLesson } from './api/latestLesson';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const [latestLesson, setLatestLesson] = useState(1);
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      getLatestLesson(user.email)
        .then(({ latest_lesson }) => setLatestLesson(latest_lesson))
    }
  }, [user])

  const renderHeader = () => {
    if (window.location.pathname === '/') {
      return;
    }
    return <Header latestLesson={latestLesson} />;
  };

  return (
    <Router>
      {renderHeader()}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <ProtectedRoute path="/lecciones/:latestLesson" component={Lecciones} />
        <ProtectedRoute path='/home' component={() => <Home latestLesson={latestLesson} />} />
        <ProtectedRoute path='/codex/:id' component={Codex} />
        <ProtectedRoute path='/test' component={TestAudio} />
        <ProtectedRoute path='/dictionary' component={Dictionary} />
      </Switch>
    </Router>
  )
}

export default App;