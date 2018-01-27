import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar';
import BANDS from './data/artist-database-example.json'
import ProfilePage from './components/ProfilePage'
import api from './ApiWrapper'
// import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { bands: [] }
  }
  componentDidMount() {
console.log("getting bands")
    api.getBands([1,3,5,6,9,10,12,23,20,19,40,41]).then(
      (results => {
        this.setState({ bands: results.body }, console.log(this.state.bands)
        )
        console.log(results.body,"are the results of the request")

      })
    )
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" render={() => (<Dashboard bands={this.state.bands} />)} />
          <Route path="/band/:bandname" component={ProfilePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
