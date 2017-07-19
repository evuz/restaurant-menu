import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IntroComponent from '../components/Intro';
import UserDataComponent from './UserData';
import ExampleFormContainer from './ExampleFormContainer';

const RouteContainer = () => (
  <Switch>
    <Route path="/" exact component={IntroComponent} />
    <Route path="/user" exact component={UserDataComponent} />
    <Route path="/form" exact component={ExampleFormContainer} />
  </Switch>
);

export default RouteContainer;
