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
    this.state = { bands: [], bandIDarray: [], moreResults: true,currentBand:{band_id:0}}
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
  //array in the state, then slices off the first 12 IDs and queries the database for those bands' info.

  loadBandIDs = (genre, searchterm) => {
    this.setState({ resultsLoaded: false }, () =>
      api.fetchBandIDs(genre, searchterm).then(
        results => {
          this.setState({
            bands: [],
            searchtermDisplayed: searchterm,
            genreDisplayed: genre,
            bandIDarray: this.shuffle(results.body),
            moreResults: true,
          },
            () => {
              console.log("loaded results for genre:", genre, "and searchterm", searchterm);
              this.getTwelveBands()
            }
          )
        }
      )
    )
  }

  //this function slices off the first twelve band IDs from the shuffled array,
  //and retrieves those bands' data from the database.

  getTwelveBands = () => {
    //checks if there are band IDs left in the results
    if (this.state.bandIDarray.length > 0) {
      let nextTwelveBands = this.state.bandIDarray.splice(0, 12)
      nextTwelveBands = nextTwelveBands.map(obj => obj.band_id)
      api.getBands(nextTwelveBands).then(
        (results => {

          //we do this second shuffle on the 12 results so that genres with only a few bands
          //will still present them in a different order (e.g. World&Reggae or Classical & Traditional)

          let shuffledResults = this.shuffle(results.body)
          this.setState(st => ({
            resultsLoaded: true,
            bands: st.bands.concat(shuffledResults)
          }),
            () => console.log(results.body.length, "bands were put into state")
          )
          console.log(results.body, "are the results of the request")

        })
      )
    }
    else { this.setState({ moreResults: false, resultsLoaded: true }) }
  }

  getSingleBand = (band_id) => {
    if (band_id!==this.state.currentBand.band_id){
      api.getSingleBand(band_id)
        .then((response) => this.setState({ currentBand: response.body[0] }
        )
        )
      }
    
  }

  componentDidMount() {
    console.log("process.env.node_env is currently", process.env.NODE_ENV)
    console.log("process is", process.env)
    console.log("getting bands")
    this.loadBandIDs("")
  }

  render() {
    //this obtains shorter variable names by destructuring this.state

    const { bands, moreResults, genreDisplayed, searchtermDisplayed, resultsLoaded, currentBand } = this.state
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar loadBandIDs={this.loadBandIDs} />

          <Route exact path="/" render={() => (
            <Dashboard
              bands={bands}
              getTwelveBands={this.getTwelveBands}
              getSingleBand={this.getSingleBand}
              moreResults={moreResults}
              genreDisplayed={genreDisplayed}
              searchtermDisplayed={searchtermDisplayed}
              resultsLoaded={resultsLoaded}
            />)
          } />

          <Route path="/submit" component={Submit} />
          <Route path="/about" component={About} />
          <Route path="/band/:id" render={(props) => {
            let id = parseInt(props.match.params.id,10);
            if (this.state.currentBand.band_id!==undefined && id!==this.state.currentBand.band_id){
              console.log("rendering with ID",id,"and currentband ID is", this.state.currentBand.band_id)

            this.getSingleBand(id)}
            return <ProfilePage bandObject={currentBand} />
          }} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
