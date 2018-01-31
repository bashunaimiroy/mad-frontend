import React, { Component } from 'react';
import styled from 'styled-components'

const SearchInput = styled.input`
width: 65%;
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

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
      <SearchInput/>
      </div>
    );
  }
}

export default SearchBar;