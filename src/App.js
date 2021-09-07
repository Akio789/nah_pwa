import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Home from './displays/Home/Home';
import Codex from './displays/Codex/Codex';
import Login from './displays/Login/Login';
import Header from './components/Header/Header';
import ProtectedRoute from "./components/Auth/ProtectedRoute";

import { test1 } from './api/test';

const Test = () => {
  const [testHtml, setTestHtml] = useState('')
  const { id } = useParams()

  const createMarkup = () => {
    console.log(testHtml)
    return { __html: testHtml };
  }

  useEffect(() => {
    test1(id).then((data) => setTestHtml(data.grammar))
  }, [id])

  return (
    <div>
      <h1>Hola Arturo</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

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
        <ProtectedRoute path='/home' component={Home} />
        <Route path='/codex/:id' component={Codex} />
        <Route path='/test/:id' component={Test} />
      </Switch>
    </Router>
  )
}

export default App;