import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IntroComponent from '../components/Intro';
import UserDataComponent from './UserData';

const RouteContainer = () => (
  <Switch>
    <Route path="/" exact component={IntroComponent} />
    <Route path="/user" exact component={UserDataComponent} />
  </Switch>
);

export default RouteContainer;
