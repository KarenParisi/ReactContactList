import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';


import ContactContainer from "ui/contactcontainer.js";
import ContactListContainer from "ui/contactlistcontainer.js";
//import both containers set path to both containers
// UI

import ExampleComponent from 'ui/example';

const Site = (
  <Router history={hashHistory}>
      <Route path="/" component={ContactListContainer} />
      <Route path="/" component={ContactContainer} />
  </Router>
);

render(Site, document.getElementById('app'));