import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Submit from './components/Submit'
import About from './components/About'
import NavBar from './components/NavBar';
import SpotifyWidget from './components/SpotifyWidget';
import ProfilePage from './components/ProfilePage'
import api from './ApiWrapper'
import Modal from './components/Modal'

// import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
	  if (this.props.location !== prevProps.location) {
		window.scrollTo(0, 0)
	  }
	}
  
	render() {
	  return this.props.children
	}
  }

const ScrollWithRouter = withRouter(ScrollToTop)


class App extends Component {

	constructor() {
		super()
		this.state = {
			bands: [],
			bandIDarray: [],
			moreResults: true,
			currentBand: { band_id: 0 },
			showModal: false
		}
	}
	//this is a Durstenfeld Shuffle function for randomising the elements in an array
	shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array
	}

	initialiseSubgenres = (bandArray) => {

		let inactiveSubgenresObject = {}
		
		for (let i = 0, len = bandArray.length; i < len; i++) {
			if (bandArray[i].band_genre){ 
				let band = bandArray[i]
				let subGenres = band.band_genre.split(', ')
				for (let j = 0, len = subGenres.length; j < len;j++){

					let subGenre = subGenres[j]

					//push the ID onto an array on the object, or start an array if it doesn't exist

					if (inactiveSubgenresObject.hasOwnProperty(subGenre)){
						inactiveSubgenresObject[subGenre].push(band.band_id)
					} else {
						inactiveSubgenresObject[subGenre] = [band.band_id];
					}
				}
			}
		}
		this.setState({
			inactiveSubgenresObject: inactiveSubgenresObject,
			inactiveSortedSubgenresArray: this.sortSubGenres(inactiveSubgenresObject),
			activeSubgenresObject:{}
		}) 
	}
	
	sortSubGenres = (inactiveSubgenresObject) => {
		
		//this will be an array of genre objects
		var subGenreArray = [];
		for (var subgenre in inactiveSubgenresObject) {

			let subGenreObject = {	
				name: subgenre, 
				ids: inactiveSubgenresObject[subgenre],
				active:false
			}
			subGenreArray.push(subGenreObject);
		}
		
		let sortedArray = subGenreArray.sort(function(a, b) {
			return b.ids.length - a.ids.length;
		});

		return sortedArray

	}

	activateSubgenre = (subgenre) => {
		// we'll need to sort the subgenres again.
		subgenre.active = true;
		//we add the new active subgenre to this.state.activeSubgenresObject,
		let newActiveSubgenresObject = {...this.state.activeSubgenresObject}
		newActiveSubgenresObject[subgenre.name] = subgenre
		//and we also remove it from this.state.inactiveSubgenresObject
		let newInactiveSubgenresObject = {...this.state.inactiveSubgenresObject}
		delete newInactiveSubgenresObject[subgenre.name]
		console.log('activating the subgenre',subgenre.name,'. New object is',newActiveSubgenresObject)

		
		this.setState({
			activeSubgenresObject: newActiveSubgenresObject,
			inactiveSubgenresObject: newInactiveSubgenresObject,
			inactiveSortedSubgenresArray: this.sortSubGenres(newInactiveSubgenresObject)
		}, this.filterBySubgenres) 
	}
	
	deactivateSubgenre = (subgenre) => {
		//just the reverse of activateSubgenre.

		subgenre.active = false;		
		let newActiveSubgenresObject = {...this.state.activeSubgenresObject}
		delete newActiveSubgenresObject[subgenre.name]
		
		let newInactiveSubgenresObject = {...this.state.inactiveSubgenresObject}
		newInactiveSubgenresObject[subgenre.name] = subgenre.ids
		console.log('deactivating the subgenre',subgenre.name,'. New object is',newActiveSubgenresObject)

		
		this.setState({
			activeSubgenresObject: newActiveSubgenresObject,
			inactiveSubgenresObject: newInactiveSubgenresObject,
			inactiveSortedSubgenresArray: this.sortSubGenres(newInactiveSubgenresObject)
		}, ()=>{
				if (Object.keys(this.state.activeSubgenresObject).length)
				{ 
					this.filterBySubgenres()
				} else {
					// if the activeSubgenresObject is empty, then we're just showing the unfiltered
					// search results. So set up the dashboard with the original search results,
					// the original genre searched for and the original searchTerm.
					this.displaySearchResults(this.state.searchResults, this.state.genreDisplayed,this.state.searchtermDisplayed)
				}	
			}
		)
	}

	filterBySubgenres = () => {
		//this is a lot like setupDashboard, but we've already got the IDs, 
		// stored in the activeSubgenresObject
		let subGenresIDarray = []
		
		for (let subgenre in this.state.activeSubgenresObject){
			subGenresIDarray = subGenresIDarray.concat(this.state.activeSubgenresObject[subgenre].ids)
		}
	

		this.setState({ resultsLoaded: false },
			() => this.setState({
						bands: [],
						bandIDarray: this.shuffle(subGenresIDarray),
						moreResults: true
					},	
					() => {							
						this.getTwelveBands()
					}
				)
			
		)

	}


	/* this gets an array of IDs of all the bands with a genre / searchterm query.
	it shuffles the array, stores the shuffled array in the state.
	It also goes through the array and makes a sorted array of Subgenres, from biggest to smallest.
	
	
	then slices off the first 12 IDs and queries the database for those bands' info.
	*/

	loadBandIDs = (genre, searchterm) => {
		// this returns a promise with an array of band objects containing IDs and subGenres
		return api.fetchBandIDs(genre, searchterm)
	}

	displaySearchResults = (resultsArray,genre,searchterm) => {
			// since this is a fresh pull from a given genre and searchterm,
			// reset the subgenres, bands array, activeSubgenres, everything

			// note that searchResults is the original unfiltered search results,
			// but bandIDarray will be altered by subgenre filtering. see: this.filterBySubgenres

			let idArray = resultsArray.map(obj => obj.band_id)
			console.log('results from fetchbandIDs is',resultsArray);
			this.initialiseSubgenres(resultsArray);
			this.setState({
				bands: [],
				genreDisplayed: genre,
				searchtermDisplayed: searchterm,
				searchResults: resultsArray,
				bandIDarray: this.shuffle(idArray),
				moreResults: true
			},
				() => {							
					this.getTwelveBands()
				}
			)
		}

	//this function slices off twelve band IDs from the shuffled array,
	//and retrieves those bands' data from the database.

	getTwelveBands = () => {
		//checks if there are band IDs left in the results
		if (this.state.bandIDarray.length > 0) {
			let nextTwelveBands = this.state.bandIDarray.splice(0, 12)
			
			api.getBands(nextTwelveBands).then(
				(results => {

					//we do this second shuffle on the 12 results so that genres with only a few bands
					//will still present them in a different order (e.g. World&Reggae or Classical & Traditional)

					let shuffledResults = this.shuffle(results.body)
					this.setState(st => ({
						resultsLoaded: true,
						bands: st.bands.concat(shuffledResults)
					}),
						() => console.log(results.body.length, "bands were put into state")
					)
					console.log(results.body, "are the results of the request")

				})
			)
		}
		else { this.setState({ moreResults: false, resultsLoaded: true }) }
	}

	getSingleBand = (band_id) => {
		if (band_id !== this.state.currentBand.band_id) {
			api.getSingleBand(band_id)
				.then((response) => this.setState({ currentBand: response.body[0] }
				)
			)
		}

	}
	askToSubscribe = () => {
		setTimeout(this.openModal, 30000);
	}

	openModal = () => {
		this.setState({ showModal: true })
	}
	closeModal = () => {
		this.setState({ showModal: false })
	}

	componentDidMount() {		
		this.setupDashboard()
		let subscribed = localStorage.getItem('subscribed')
		if (!subscribed) { this.askToSubscribe() }
	}

	setupDashboard = (genre = "", searchterm) =>{
		// sets the dashboard state to loading, then goes and loads IDs for all genres, then
		// sets up the dashboard state for a fresh pull.
		console.log('setting up dashboard, genre is ', genre);
		
		this.setState({ resultsLoaded: false },
			() => this.loadBandIDs(genre,searchterm)
			.then(results => this.displaySearchResults(results.body,genre,searchterm)
			)
		)
	}	

	render() {
		//this obtains shorter variable names by destructuring this.state
		const { bands, activeSubgenresObject, inactiveSortedSubgenresArray, moreResults, genreDisplayed, searchtermDisplayed, resultsLoaded, currentBand } = this.state
		return (
			<BrowserRouter>
				<ScrollWithRouter>
				<div className="App" >

					<Modal closeModal={this.closeModal} display={this.state.showModal} apiNewsletterSubscribe={api.subscribeToNewsletter}key="unique-key" />
					<Route render={(props)=>[<NavBar {...props} setupDashboard={this.setupDashboard} />, <SpotifyWidget/>]}>
						
					</Route>
					<Route exact path="/" render={(props) => (
						<Dashboard
							{...props}
							setupDashboard = {this.setupDashboard}
							bands={bands}
							getTwelveBands={this.getTwelveBands}
							getSingleBand={this.getSingleBand}
							activateSubgenre={this.activateSubgenre}
							deactivateSubgenre={this.deactivateSubgenre}
							moreResults={moreResults}
							genreDisplayed={genreDisplayed}
							searchtermDisplayed={searchtermDisplayed}
							resultsLoaded={resultsLoaded}
							inactiveSortedSubgenresArray={inactiveSortedSubgenresArray}
							activeSubgenresObject={activeSubgenresObject}

						/>)
					} />

					<Route path="/submit" component={Submit} />
					<Route path="/about" component={About} />
					<Route path="/band/:id" render={(props) => {
						let id = parseInt(props.match.params.id, 10);
						//checks if it should retrieve new band data
						if (this.state.currentBand.band_id !== undefined && id !== this.state.currentBand.band_id) {
							console.log("rendering with ID", id, "and currentband ID is", this.state.currentBand.band_id)
							this.getSingleBand(id)
						}
						return <ProfilePage bandObject={currentBand} />
					}} />
				</div>
				</ScrollWithRouter>
			</BrowserRouter>
		);
	}
}

export default App;
