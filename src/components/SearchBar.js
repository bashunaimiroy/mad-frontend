import React, { Component } from 'react';
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const SearchInput = styled.input`
padding: 0 30px 2px 42px;
visibility: visible;
font-size: 14px;
color: #111;
background-color: #f1f1f1;
border: 1px solid transparent;
border-radius: 20px;
outline: none;
transition: all 0.2s ease-in-out;
-webkit-appearance: none;
`;

const SearchButton = styled.button`
position:absolute;
top:33%;
right:1%;
background:none;
border:none;
`

class SearchBar extends Component {

  render() {
    return (
        this.props.mobileSearch?
        
        <div className="search-bar" key="searchbar">
          <form onSubmit={this.props.onSubmit} >

          <SearchInput onChange={this.props.onChange} type="search" placeholder="search for an artist" value={this.props.value} />
          </form>

          <FontAwesome name='search' className='search__icon'/> 
          
        </div>

        :
        !this.props.showSearch? 
        <FontAwesome name='search' className='search__icon' onClick={this.props.toggleSearch}/> 
          :
        <div className="search-bar" key="searchbar">
          <form onSubmit={this.props.onSubmit} >
          
          <SearchInput onChange={this.props.onChange} type="search" placeholder="search for an artist" value={this.props.value} />

          {/* <SearchButton><FontAwesome name="search"/></SearchButton> */}
          </form>
          <FontAwesome name='times' className='search__icon' onClick={this.props.toggleSearch}/> 
        </div>
        
    );
  }
}

SearchBar.propTypes={
  onSubmit:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  toggleSearch:PropTypes.func.isRequired,
}

export default SearchBar;