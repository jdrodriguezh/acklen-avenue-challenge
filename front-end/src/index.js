import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login"
import Register from "./views/Register"
import Collection from "./views/Collection";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import * as serviceWorker from "./serviceWorker";

const hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/collection/:id" component={Collection}/>
      <Redirect path="/" to="/home"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
