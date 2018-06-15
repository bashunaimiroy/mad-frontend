import React, { Component } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FontAwesome from 'react-fontawesome';

const WidgetContainer = styled.div`
position:fixed;
padding:5px;
background-color:black;
border-radius:10px;
bottom:2px;
left:2px;
color:white;
cursor:pointer;
`

const IFrameContainer = styled.div`
position:relative;
`
const MinimizeButton = styled.div`
position:absolute;
top:-25px;
right:-20px;
border-radius:21px;
background-color:black;
padding:10px;
border:1px solid white;
`

class SpotifyWidget extends Component {
	constructor(props){
		super()
		this.state={open:false}
	}
	handleClick=()=>{
		this.setState({open:true})
	}
	minimizeContainer=(e)=>{
		e.stopPropagation();
		this.setState({open:false})
	}
	render() {
		return (
			<WidgetContainer className="widget-container" onClick={this.handleClick}>
				
				{this.state.open?[
				<MinimizeButton onClick={this.minimizeContainer}>
					<FontAwesome name="angle-double-down" size='lg'/>
				</MinimizeButton>,
					<ReactCSSTransitionGroup
						transitionName="spotify-widget"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}
					>
					
						<IFrameContainer>
							
							<iframe src="https://open.spotify.com/embed?theme=white&uri=spotify:user:7sftviomzeshjwe7cw8e7t1az:playlist:1VvzMMaHQbhXLtSH9HzhgL&view=coverart" width="250" height="380" frameBorder="5px" allowtransparency="true" allow="encrypted-media"></iframe>
						</IFrameContainer>
					</ReactCSSTransitionGroup>]
					:
					[<MinimizeButton onClick={this.handleClick}>
						<FontAwesome name="angle-double-up" size='lg'/>
					</MinimizeButton>,
					<FontAwesome name="spotify" size='4x'/>
					]}
			</WidgetContainer>
		);
	}
}

export default SpotifyWidget;