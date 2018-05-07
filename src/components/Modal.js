import React, { Component } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Backdrop = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color: rgba(150,150,150,0.5);
`
const Modalbox = styled.div`
position:relative;
margin: 0 20px;
padding:20px;
top:50%;
max-width:500px;
display:flex;
flex-flow:column nowrap;
justify-content:center;
align-items:center;
background-color:#fff;
border-radius:5px;
@media only screen and (min-width:580px){
	margin: 0 auto;
}
`
class Modal extends Component {
	constructor(){
		super();
		this.state={};
	}

	handleChange=(e)=>{
		this.setState({email:e.target.value})
	}
	handleSubmit=(e)=>{
		e.preventDefault()
		let email = this.state.email
		//do mail-list submit thing here
		//then, as a callback:
		localStorage.setItem('subscribed',true)
		this.setState({subscribed:true})
		setTimeout(this.props.closeModal,3000)
	}

	render() {
		return <ReactCSSTransitionGroup 
					transitionName='fade'
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					>
		{!this.props.display? null :
				<Backdrop onClick={this.props.closeModal}>
					<Modalbox onClick={(e)=>e.stopPropagation()}>
						{this.state.subscribed ? 
						<p className="modal__text">
							Thanks for subscribing!
						</p>:[
						<p className="modal__text" key='1'>
							We notice you've been enjoying our free site! You could help us out by subscribing to Kickdrum's newsletter- it's a good way to keep your thumb on the pulse of Montreal music.
						</p>,
						<form className='modal__form' onSubmit={this.handleSubmit} key='2'>
							<input className='modal__form__input' onChange={this.handleChange} placeholder='enter your email here'></input>
							<button className="modal__button">
								Submit
							</button>
						</form>]
						}
					</Modalbox>
				</Backdrop>
		}
		</ReactCSSTransitionGroup>
		
	}
}

export default Modal;