/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import film from 'images/film.png'
import { Helmet } from 'react-helmet'; // Header Generator
import { Switch, Route, Router } from 'react-router-dom';
import CriticsPage from 'containers/CriticsPage/CriticsPage';
import ReviewPage from 'containers/ReviewPage/ReviewPage';
import HomePage from 'containers/HomePage/HomePage';
import NavBar from './components/NavBar.jsx';
import '../../styles/_navigation.scss';
import '../../styles/styles.scss';


export default function App(props) {

    return (

      <div className="app-wrapper">

        <Helmet title="Roger Ebert Wannabe Blog">
          <meta name="description" content="React Movie Reviews" />

        </Helmet>
        <header>

            <img src={film} />
            <h1> Roger Ebert Wannabes </h1>

        </header>
            <NavBar>
            </NavBar>

            <Switch>
                <Route path="/(|index.html)" exact >
                <HomePage />
                </Route>
                <Route path="/critics" exact >
                <CriticsPage />
                </Route>
                <Route path="/reviews" exact >
                <ReviewPage />
                </Route>
            </Switch>


            <footer>
            <p> © 2022 Sara Biebuyck </p>
            </footer>

      </div>
    );
  }
