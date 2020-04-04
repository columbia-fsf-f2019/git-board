import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Box } from 'theme-ui';

import AuthenticatedNavbar from './components/AuthenticatedNavbar';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box width="100vw" height="100vh">
        <AuthenticatedNavbar />
        <Switch>
          <Route path="/lists/:id">
            <List />
          </Route>
          <Route path="/lists">
            <Dashboard />
          </Route>
          <Route path="/">
            <Redirect to="/lists" />
          </Route>
        </Switch>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
