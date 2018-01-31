import React, { Component } from 'react';
import ArtistCard from './ArtistCard';
import styled from "styled-components"
import InfiniteScroll from 'react-infinite-scroller';



const CardWrapper = styled.div `
grid-template-columns : repeat(auto-fit, 200px);
grid-template-rows: repeat(auto-fit, 200px);
display: grid; 
height: 100%;
justify-content:center;
grid-gap: 1em 3%;
max-width:65%;
margin:0 auto;
`

class PreviewPane extends Component {
  constructor(){
    super()
    this.state={loading:false}
  }

  render() {
    console.log("previewPane loaded with ",this.props.bands.length," bands in props.bands")
    return (
     
      <InfiniteScroll
      pageStart={0}
      loadMore={this.props.getTwelveBands}
      hasMore={this.props.moreResults}
      loader={<div className="loader" key={0}>Loading artists...</div>}
  >
                <CardWrapper>
      {this.props.bands.map(band=><ArtistCard band={band} key={band.band_id}/>)}

                </CardWrapper>
                </InfiniteScroll>
      
    );
  }
}

export default PreviewPane