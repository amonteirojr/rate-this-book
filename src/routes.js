import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookDetails from './pages/BookDetails';

import Main from './pages/Main';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/book-details/:isbn">
          <BookDetails />
        </Route>
      </Switch>
    </Router>
  );
}
