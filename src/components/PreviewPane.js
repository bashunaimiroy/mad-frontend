import React, { Component } from 'react';
import ArtistCard from './ArtistCard';
import styled from "styled-components"
import Infinite from "react-infinite"



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
    this.state={loading:false,endOfResults:false}
  }

  render() {
    console.log("previewPane received ",this.props.bands.length," bands")
    return (
      <CardWrapper>
      {this.props.bands.map(band=><ArtistCard band={band} key={band.band_id}/>)}

      {/* <Infinite
                    isInfiniteLoading={this.state.loading}
                    onInfiniteLoad={this.props.getTwelveBands}
                    infiniteLoadBeginEdgeOffset={100
                    }
                    useWindowAsScrollContainer 
                    elementHeight={200}
                    loadingSpinnerDelegate=
                    {<div>loading artists...
                    </div>}
                > */}
                {/* </Infinite> */}
      </CardWrapper>
    );
  }
}

export default PreviewPane