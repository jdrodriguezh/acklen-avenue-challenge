import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../views/Loading";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth0();

  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Redirect to="/landing" />)}
    />
  );
};

export default ProtectedRoute;