import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "./layout/ProtectedRoute";
import Home from "./views/Home";
import Collection from "./views/Collection";
import Landing from "./views/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import * as serviceWorker from "./serviceWorker";

const hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist}>
    <Auth0Provider
      domain="dev-n811rh5t.us.auth0.com"
      clientId="BzuseeOC8D7PCNdss351qRyDF2AqqXlz"
      redirectUri={window.location.origin}>
      <Switch>
        <ProtectedRoute path="/home" component={Home} />
        <ProtectedRoute path="/collection/:id" component={Collection} />
        <Route path="/landing" component={Landing} />
        <Redirect path="/" to="/home" />
      </Switch>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
