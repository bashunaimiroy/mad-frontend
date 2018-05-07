import React, { Component } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const openButton = styled.div`
width:200px;
height:200px;
`
class SpotifyWidget extends Component {
	constructor(props){
		super()
		this.state={open:false}
	}
	handleClick=()=>{
		this.setState({open:true})
	}
	render() {
		return (
			<openButton onClick={this.handleClick}>
				<ReactCSSTransitionGroup
				transitionName="spotify-widget"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
				>
				{this.state.open?
				<div>
					<iframe src="https://open.spotify.com/embed?uri=spotify:user:7sftviomzeshjwe7cw8e7t1az:playlist:1VvzMMaHQbhXLtSH9HzhgL" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
				</div>
				:
				null}
				</ReactCSSTransitionGroup>
			</openButton>
		);
	}
}

export default SpotifyWidget;