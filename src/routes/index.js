import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Ongs from '../pages/Ongs';
import Ong from '../pages/Ong';
import CreateOng from '../pages/CreateOng';
import Profile from '../pages/Profile'
import EditOng from '../pages/EditOng'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/ongs" component={Ongs} />
      <Route path="/ong/:id" component={Ong} />
      <Route path="/createong" component={CreateOng} />
      <Route path="/profile" component={Profile} />
      <Route path="/editong" component={EditOng} />


      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
    </Switch>
  );
};

export default Routes;
