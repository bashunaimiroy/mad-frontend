import React, { Component } from 'react';
import ArtistCard from './ArtistCard';
import styled from "styled-components"

const CardWrapper = styled.div `
grid-template-columns : repeat(auto-fit, 200px);
grid-template-rows: repeat(auto-fit, 200px);
display: grid; 
grid-gap: 1em 3%;
width: 100%;
`

class PreviewPane extends Component {
  render() {
    console.log(this.props.bands)
    return (
      <CardWrapper>
        {this.props.bands.map(band=>{return <ArtistCard band={band} key={band.bandEmail}/>})}
      </CardWrapper>
    );
  }
}

export default PreviewPane