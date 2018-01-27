import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage'
import api from './ApiWrapper'

// import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
   
  constructor() {
    super()
    this.state = { bands: [] }
  }

  getNumberOfBands = () =>
    api.getNumberOfBands.then(results => results)

  getTwelveBands = (numberOfBands) => {
    //make a randomise function here that generates something like the following array
    let exampleArray = [1, 3, 5, 6, 9, 10, 12, 23, 20, 19, 40, 41]
    exampleArray = exampleArray.map(num => num.toString().concat("1"))
    console.log("array being passed is", exampleArray)
    api.getBands(exampleArray).then(
      (results => {
        this.setState({ bands: results.body },
          ()=>console.log("bands were put into state")
        ) 
        console.log(results.body, "are the results of the request")

      })
    )
  }

  componentDidMount() {

    console.log("getting bands")
    this.getTwelveBands(400)
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
