import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IntroComponent from '../components/Intro';

const RouteContainer = () => (
  <Switch>
    <Route path="/" exact component={IntroComponent} />
  </Switch>
);

export default RouteContainer;
