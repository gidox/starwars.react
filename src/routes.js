import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from 'App';
import People from 'pages/People/People';
import NotFound from 'pages/NotFound/NotFound';

export default (
  <Router
    history={hashHistory}


  >
    <Route path="/" component={App}>
      <Route>
        <IndexRoute component={App}/>
        <Route path="/people" component={People}></Route>
      </Route>
    </Route>
  </Router>
);
