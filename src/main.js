import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';


import ContactContainer from "ui/ContactContainer";
import ContactListContainer from "ui/ContactListContainer";

const Site = (
  <Router history={hashHistory}>
      <Route path="/" component={ContactListContainer} /> 
      <Route path="/contact/:contactId" component={ContactContainer} />
  </Router>
);

render(Site, document.getElementById('app'));