import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from 'App';
import People from 'pages/People/People';
import Home from 'pages/Home/Home';

Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};
export default (
  <Router
    history={hashHistory}


  >
    <Route path="/" component={App}>
      <Route>
        <IndexRoute component={Home}/>
        <Route path="/people/:id" component={People}></Route>
      </Route>
    </Route>
  </Router>
);
