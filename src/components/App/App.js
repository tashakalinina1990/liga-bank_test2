import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import { Routes } from "../../const";
import Main from "../../pages/Main/Main";
import Error404 from "../../pages/Error404/Error404";

const App = () => {
  return (
    <Router className="app__main">
      <Switch>
        <Route exact path={Routes.HOME} component={Main} />
        <Route exact path={Routes.ERROR404} component={Error404} />
        <Redirect to={Routes.HOME} component={Main} />
      </Switch>
    </Router>
  );
};

export default App;
