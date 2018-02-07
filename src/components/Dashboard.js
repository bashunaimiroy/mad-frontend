import React, { Component } from 'react';
import PreviewPane from './PreviewPane';
// import { Link } from "react-router-dom";
import logo from "../mad-logo.png"

class Dashboard extends Component {


  render() {
    //this obtains shorter variable names by destructuring this.props
    const { bands, getTwelveBands,moreResults, genreDisplayed, searchtermDisplayed, resultsLoaded } = this.props

    //these variables will be either a message about the results or null if no results
    const genreResultsMessage = genreDisplayed ? <span key="genre" className="results">displaying results for {genreDisplayed}</span> : null
    const searchResultsMessage = searchtermDisplayed ? <span key="searchterm" className="results">displaying results for "{searchtermDisplayed}"</span> : null

    //this variable is only displayed if our filter/search request came back but no bands were passed in,
    //which should only happen if there were no results at all for that genre/searchterm
    const noResultsMessage = genreDisplayed ? <span className="results">No bands in {genreDisplayed}</span>
      : <span className="results">Sorry, we didn't have results for "{searchtermDisplayed}"</span>
    
    //this variable will be either our results message + band cards, or the "no results" message
    const results = bands.length ? [
      genreResultsMessage,
      searchResultsMessage,
      <PreviewPane key="PreviewPane" bands={bands} getTwelveBands={getTwelveBands} moreResults={moreResults} />
    ] :
      noResultsMessage

    return (
      <div className="Dashboard">
        <div className="header">
          <img id="logo" src={logo} alt="logo" />

        </div>

        {resultsLoaded ?
          results : <span className="little-message">loading artists...</span>

        }
      </div>
    );
  }
}

export default Dashboard;