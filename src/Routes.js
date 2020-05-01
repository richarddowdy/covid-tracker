import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeMap from './HomeMap';

function Routes() {
  
  return (
    <Switch>
      <Route exact path="/">
        <HomeMap />
      </Route>
      
      {/* <Route exact path="/states/:stateInitials????">

      </Route> */}
      
      {/* <Route>
        <NotFound />
      </Route> */}
    </Switch>
  )
}

export default Routes;