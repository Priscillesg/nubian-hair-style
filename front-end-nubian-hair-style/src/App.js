import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Search from './Search/Search';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BusinessDetails from './BusinessDetails/BusinessDetails';
import Favourites from './Favourites/Favourites';

const App = () => {
  return (
    <Router>
      <Route path='/search' exact  component={Search} />
      <Route path='/' exact  component={LandingPage}/>
      <Route path='/api_list/:business_id' exact component={BusinessDetails}/>
      <Route  path='/favourites' exact component={Favourites}/>
    </Router>
  
  );
}

export default App;
