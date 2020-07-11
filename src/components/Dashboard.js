import React, { Component } from 'react';
import PreviewPane from './PreviewPane';
import SubGenreSidebar from './SubGenreSidebar';
// import { Link } from "react-router-dom";
import logo from "../mad-logo.png"
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { ButtonLine } from './SocialMediaButton';


class Dashboard extends Component {

  kickDrumLinks = [
    {name:"facebook",url:"https://www.facebook.com/kickdrumMTL"},
    {name:"instagram",url:"https://www.instagram.com/kickdrummtl"},
    {name:"twitter",url:"https://www.twitter.com/KickDrumMTL"},
    {name:"soundcloud",url:"https://www.soundcloud.com/kickdrummtl"},
    {name:"spotify",url:"http://spoti.fi/2H3XdzC"},
    {name:"youtube",url:"https://www.youtube.com/channel/UCs_OZ1ylUehBu7zEbiAm-oA"},
    
  ]
 
  render() {
    //this obtains shorter variable names by destructuring this.props
    const { bands, getTwelveBands,moreResults, genreDisplayed, searchtermDisplayed, resultsLoaded } = this.props

    //these variables will be either a message about the results or null if no results
    const genreResultsMessage = genreDisplayed ? 
    <div className="results">
      <span key="genre" className="results__text">displaying results for {genreDisplayed}</span>
      <FontAwesome name='times' onClick={()=>this.props.setupDashboard()}/>
    </div> : null
  const searchResultsMessage = searchtermDisplayed ? 
  
    <div className="results"><span key="searchterm" className="results__text">displaying results for "{searchtermDisplayed}"</span><FontAwesome name='times' onClick={()=>this.props.setupDashboard()}/></div> : null

    //this variable is only displayed if our filter/search request came back but no bands were passed in,
    //which should only happen if there were no results at all for that genre/searchterm
    const noResultsMessage = genreDisplayed ? <span className="results">No bands in {genreDisplayed}</span>
      : <span className="results">Sorry, we didn't have results for "{searchtermDisplayed}"</span>


    //this variable will be either our results message + band cards, or the "no results" message
    const results = bands.length ? [
      genreResultsMessage,
      searchResultsMessage,
      <div className="Dashboard__flex-container">
        {genreDisplayed? <SubGenreSidebar 
          inactiveSortedSubgenresArray = {this.props.inactiveSortedSubgenresArray} 
          activeSubgenresObject = {this.props.activeSubgenresObject} 
          activateSubgenre={this.props.activateSubgenre}
          deactivateSubgenre={this.props.deactivateSubgenre}
        /> : null}
       
        <PreviewPane key="PreviewPane" 
        bands={bands} 
        getTwelveBands={getTwelveBands} 
        moreResults={moreResults} />
        
        {genreDisplayed? <div className="right-spacetaker"></div> : null}
      </div>
    ] :
      noResultsMessage

    return (
      <div className="Dashboard">
          {resultsLoaded ?
          results : <span className="little-message">loading artists...</span>

        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  bands:PropTypes.array.isRequired,
  getTwelveBands:PropTypes.func.isRequired,
  getSingleBand:PropTypes.func.isRequired,
  moreResults:PropTypes.bool.isRequired,
  genreDisplayed:PropTypes.string,
  searchtermDisplayed:PropTypes.string,
  resultsLoaded:PropTypes.bool
}

export default Dashboard;