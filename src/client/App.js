import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ViewPage from './components/ViewPage';


export default function App() {
  return (
    <Router>
      <Switch>

        <Route path="/">
          <ViewPage />
        </Route>

      </Switch>
    </Router>
  );
}
