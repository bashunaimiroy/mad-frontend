import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar';
import BANDS from './data/artist-database-example.json'
import ProfilePage from './components/ProfilePage'
// import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <NavBar/>
      <Route exact path="/" render={()=>(<Dashboard bands={BANDS}/>)}/>  
      <Route path="/band/:bandname" component={ProfilePage}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
