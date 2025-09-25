import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../auth'; // Example functions for authentication check

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isAuthenticated()) {
        // Not authenticated, redirect to login
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      }

      const userRole = getUserRole(); // Example function to get user role
      if (roles && roles.indexOf(userRole) === -1) {
        // Authenticated but role not authorized
        return <Redirect to={{ pathname: '/', state: { from: props.location } }} />;
      }

      // Authenticated and role authorized, render the component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
