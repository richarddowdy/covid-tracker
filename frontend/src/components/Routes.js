import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeMap from './HomeMap';
import StateProfile from './StateProfile';
import StatesList from './StatesList';
import NotFound from './NotFound';

function Routes() {
  
  return (
    <Switch>
      <Route exact path="/">
        <HomeMap />
      </Route>
      
      <Route exact path="/states/:state">
        <StateProfile />
      </Route>

      <Route exact path="/states">
        <StatesList />
      </Route>
      
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes;