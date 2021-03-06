import React from 'react';

import {BrowserRouter as Router,Route,Redirect,Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Accordion from 'react-bootstrap/Accordion';

import MainNavigation from './Business/MainNavigation/MainNavigation';
import MainNewsFeed from './Business/NewsFeed/MainNewsFeed';
import NewsFeedItems from './Business/NewsFeed/NewsFeedItems';
import Intro from './Business/NewsFeed/Intro';
import Accord from './Business/NewsFeed/Accord';
import Footer from './Business/NewsFeed/Footer';

import './App.css';

const App = ()=> {
  return (

    <Router>
<MainNavigation/>

    <main>

        <Switch>
        <Route path="/"exact>
        <Accord/>

          <Footer/>

        </Route>
        <Route path="/aut" >


        </Route>
        <Route path="/">

        </Route>
        <Redirect to="/"/>
        </Switch>
</main>
      </Router>
  );
};

export default App;
