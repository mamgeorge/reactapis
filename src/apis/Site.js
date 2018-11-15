import React, { Component } from 'react';
import { loadApiDocs } from '../home/Utils';
import SiteList from './../resources/apod.json'

// https://api.nasa.gov/api.html#apod , https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://www.robinwieruch.de/react-fetching-data/
// https://stackoverflow.com/questions/36631762/returning-html-with-fetch
const LINK_SITE = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

class Site extends Component {

	constructor(props) { super(props); this.state = { data: null, }; }

	componentDidMount() { loadApiDocs( this , LINK_SITE ); }
	
	render() {
		let data = this.state.data;
		if (data === undefined) {
			data = SiteList.results; 
			return (<div>please refresh</div>);
		} else {
			return ( // JSON.stringify( results )
				<div  className = "tbls"><center>{ data }</center></div>
			);
		}
	}
}
export default Site;
