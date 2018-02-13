import React, { Component } from 'react';
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const SearchInput = styled.input`
width: 100%;
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
  //local state here is necessary because controlled components must be controlled by local state,
  //not by props passed in by a higher-level component
  // constructor(props){
  //   super()
  //   this.state={value:props.value}
  // }
  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="SearchBar">
      <SearchInput onChange={this.props.onChange} type="search" placeholder="search for an artist" value={this.props.value} />
      <SearchButton><FontAwesome name="search"/></SearchButton>
      </form>
    );
  }
}

export default SearchBar;