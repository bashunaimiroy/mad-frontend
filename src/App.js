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
    this.state = { bands: [], genreIDarray: [],moreResults:true}
  }
  //this is a Durstenfeld Shuffle function for randomising the elements in an array
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  //this gets an array of IDs of all the bands in a given genre, shuffles the array, stores the shuffled
  //array in the state, then retrieves the first twelve.

  loadGenreIDs = (genre) =>
  
    api.getGenreIDs(genre).then(
      results => {
        this.setState({bands:[], 
          genreDisplayed:genre, 
          genreIDarray: this.shuffle(results.body),
          moreResults:true},
          ()=>{
            console.log("loaded IDs for bands with genre:",genre);
            this.getTwelveBands()
          }
        )
      })

  //this function slices off the first twelve band IDs from the shuffled array,
  //and retrieves those bands' data from the database.

  getTwelveBands = () => {
    if (this.state.genreIDarray.length>0){
    let nextTwelveBands = this.state.genreIDarray.splice(0, 12)
    nextTwelveBands = nextTwelveBands.map(obj => obj.band_id)
    api.getBands(nextTwelveBands).then(
      (results => {
        //we do this second shuffle on the 12 results so that genres with only a few bands
        //will still present different bands first (e.g. World&Reggae or Classical & Traditional)
        let shuffledResults = this.shuffle(results.body)
        this.setState(st=>({ bands: st.bands.concat(shuffledResults)}),
          () => console.log(results.body.length, "bands were put into state")
        )
        console.log(results.body, "are the results of the request")

      })
    )
  }
  else {this.setState({moreResults:false})}
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
          <NavBar loadGenreIDs ={this.loadGenreIDs}/>

          <Route exact path="/" render={() => (
            <Dashboard bands={this.state.bands} getTwelveBands={this.getTwelveBands} moreResults={this.state.moreResults}/>)
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
