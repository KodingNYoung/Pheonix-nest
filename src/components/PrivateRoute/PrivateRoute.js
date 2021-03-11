import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUserId = localStorage.getItem("currentUserId");

  const render = (props) => {
    return currentUserId ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to='/login' />
    );
  };
  return <Route {...rest} render={render} />;
};

export default PrivateRoute;
