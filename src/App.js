import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Submit from './components/Submit'
import About from './components/About'
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage'
import api from './ApiWrapper'

// import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';



class App extends Component {

  constructor() {
    super()
    this.state = { bands: [], genreIDarray: [] }
  }
  //this is a function for randomising the elements in an array
  durstenfeldShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  //this gets the IDs of all the bands in a given genre, shuffles the results, and stores the shuffled
  //array in the state, then retrieves the first twelve.

  loadGenreIDs = (genre) =>
    api.getGenreIDs(genre).then(
      results => {
        console.log("received IDs. results are", results.body)
        this.setState({ genreIDarray: this.durstenfeldShuffle(results.body) },
          ()=>{
            console.log("successfully changed state");
            this.getTwelveBands()
          }
        )
      })

  //this function slices off the first twelve band IDs from the shuffled array,
  //and retrieves those bands' data from the database.

  getTwelveBands = () => {

    let twelveRandomBands = this.state.genreIDarray.splice(0, 12)

    twelveRandomBands = twelveRandomBands.map(obj => obj.band_id)

    console.log("we picked twelve random bands: ", twelveRandomBands)
    api.getBands(twelveRandomBands).then(
      (results => {
        this.setState({ bands: results.body },
          () => console.log("bands were put into state")
        )
        console.log(results.body, "are the results of the request")

      })
    )
  }

  componentDidMount() {
    console.log("process.env.node_env is currently", process.env.NODE_ENV)
    console.log("process is", process.env)
    console.log("getting bands")
    this.loadGenreIDs("all")
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Route exact path="/" render={() => (
            <Dashboard bands={this.state.bands} getTwelveBands={this.getTwelveBands} />)
          } />

          <Route path="/submit" component={Submit} />
          <Route path="/about" component={About} />
          <Route path="/band/:bandname" component={ProfilePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
