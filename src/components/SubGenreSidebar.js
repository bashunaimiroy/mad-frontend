import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const InactiveSubgenre = styled.li`
padding: 5px 0px;
cursor:pointer;
`
const ActiveSubgenre = styled.li`
padding: 5px 0px;
cursor: pointer;
font-weight: bold;
`

class SubGenreSidebar extends Component {
	handleSubgenreClick = (subgenre) => {
		subgenre.active? 
			this.props.deactivateSubgenre(subgenre) :
			this.props.activateSubgenre(subgenre)
	}

	render() {
		let inactiveArray = this.props.inactiveSortedSubgenresArray.map((subgenre)=>{
				return <InactiveSubgenre onClick={()=>this.handleSubgenreClick(subgenre)} key={Math.random()*100}> {subgenre.name} ({subgenre.ids.length })</InactiveSubgenre>
			})

		
		let activeArray = []

		for (let bandName in this.props.activeSubgenresObject){
			let subgenre = this.props.activeSubgenresObject[bandName]
			activeArray.push(
				<ActiveSubgenre onClick={()=>this.handleSubgenreClick(subgenre)} key={Math.random()*100}> {subgenre.name} ({subgenre.ids.length }) <FontAwesome name="times" size="1x"/>
				</ActiveSubgenre>
			)
		}


	
		return (
			<div className="subgenre-sidebar">
			<h3> Filter by Subgenre </h3>
				<ul className="subgenre-sidebar__list subgenre-sidebar__list--active">
					{activeArray}
				</ul>
				<ul className="subgenre-sidebar__list subgenre-sidebar__list--inactive">
					{inactiveArray}
				</ul>
			</div>
		);
	}
}

export default SubGenreSidebar;