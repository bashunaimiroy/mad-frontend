import React, { Component } from 'react';
import ArtistCard from './ArtistCard';
import styled from "styled-components"
import InfiniteScroll from 'react-infinite-scroller';



const CardWrapper = styled.div`
grid-template-columns : repeat(auto-fit, 200px);
grid-template-rows: repeat(auto-fit, 200px);
display: grid; 
height: 100%;
justify-content:center;
grid-gap: 1em 3%;
max-width:75%;
margin:0 auto 25px;
`

class PreviewPane extends Component {


  render() {
    console.log("previewPane loaded with ", this.props.bands.length, " bands in props.bands")
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.props.getTwelveBands}
        hasMore={this.props.moreResults}
        loader={<span className="loader" key={0}>Loading artists...</span>}
      >
        <CardWrapper>
          {this.props.bands.map(band => <ArtistCard band={band} key={band.band_id} />)}
          {this.props.moreResults ? null : <div style={{ textAlign: "center", border: "1px dotted gray" }}>end of results</div>}
        </CardWrapper>
      </InfiniteScroll>

    );
  }
}

export default PreviewPane