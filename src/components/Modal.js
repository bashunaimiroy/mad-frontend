import React, { Component } from 'react';
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import superagent from 'superagent';

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
	constructor() {
		super();
		this.state = {};
	}

	handleChange = (e) => {
		this.setState({ email: e.target.value })
	}
	handleSubmit = (e) => {
		e.preventDefault()
		let email = this.state.email
		//do mail-list submit thing here
		this.props.apiNewsletterSubscribe(email)
		.then((response) => {
				console.log(response)
				if (response.status === 200) {
					localStorage.setItem('subscribed', true)
					this.setState({ subscribed: true, subscribeError: false })
					setTimeout(this.props.closeModal, 3000)
				} else {
					console.error(response)
					this.setState({ subscribeError: 'There was an error subscribing- try again?' })
				}
			})
		//then, as a callback:

	}

	render() {
		return <ReactCSSTransitionGroup
			transitionName='fade'
			transitionEnterTimeout={500}
			transitionLeaveTimeout={500}
		>
			{!this.props.display ? null :
				<Backdrop onClick={this.props.closeModal}>
					<Modalbox onClick={(e) => e.stopPropagation()}>
						{this.state.subscribed ?
							<p className="modal__text">
								Thanks for subscribing!
						</p> : [
								<p className="modal__text" key='1'>
									Every artist you see here is based in Montréal. Join our newsletter if you want to hear about new releases and live events!
						</p>,
								<form className='modal__form' onSubmit={this.handleSubmit} key='2'>
									<input name='EMAIL' className='modal__form__input' onChange={this.handleChange} placeholder='enter your email here'></input>
									<button className="modal__button">
										Subscribe
							</button>
								</form>]}
						{this.state.subscribeError ? <div className="modal__error"><span className="modal__error__text">{this.state.subscribeError}</span></div> : null}


					</Modalbox>
				</Backdrop>
			}
		</ReactCSSTransitionGroup>

	}
}

export default Modal;