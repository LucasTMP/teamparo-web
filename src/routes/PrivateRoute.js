import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { store } from '../store'

//const { token } = store.getState().auth

const token = window.localStorage.getItem('@teamparo:token')


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      token ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }
  />
);

export default PrivateRoute;
