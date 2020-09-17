import { Container } from '@material-ui/core';
import React from 'react';
import './App.css';
import ApiData from './components/ApiData';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostDetails from './components/PostDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
            <ApiData />
          </Route>
          <Route path='/post/:postId'>
            <PostDetails />
          </Route>
          <Route exact path='/'>
            <ApiData />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
