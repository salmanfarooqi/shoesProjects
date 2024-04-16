import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Your authentication logic
  // For simplicity, let's assume if there's a token in localStorage, the user is authenticated
  return localStorage.getItem('token') !== null;
};

const ProtectedRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={props =>
        isAuthenticated() ? (
          <Element {...props} />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
