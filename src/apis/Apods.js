import React, { Component } from 'react';
import { loadJson } from '../home/Utils';
import { dateTimeFormat } from './../resources/basics.js'
import ApodList from './../resources/samples/apods.json'
import ISSList from './../resources/samples/iss.json'

const LINK_APOD = 'https://api.nasa.gov/planetary/apod?date=';
const NASA_API_KEY = '&api_key=Oo7FtQjALw01loIt8b7nD5aqA1sIb44LSqSjQS9w';
const LINK_ISS = 'http://api.open-notify.org/iss-now.json';

class Apods extends Component {

	constructor ( props ) {
		super( props );
		this.state = { data: [], dataISS: [], dateNew: '' , classy: 'grayish' };
		this.handleChange = this.handleChange.bind( this );
	}

	loadJsonIss( component, url ) {
		fetch( url )
			.then( response => response.json() )
			.then( dataISS => { component.setState( { dataISS } ) } )
			.catch( error => console.log( error ) );
	}

	componentDidMount() {
		this.getDateFormatted();
		loadJson( this, LINK_APOD + this.state.dateNew + NASA_API_KEY );
		this.loadJsonIss( this, LINK_ISS );
	}

	getDateFormatted() {
		let dateNow = new Date();
		let dateFrm = dateTimeFormat( dateNow, 'yyyy-mm-dd' );
		this.setState( { dateNew: dateFrm } );
	}

	handleChange( evnt ) {
		let dateFrm = evnt.target.value;
		this.setState( { dateNew: dateFrm } );
		loadJson( this, LINK_APOD + this.state.dateNew + NASA_API_KEY );
	}

	handleResponses() {
		//
		let data = this.state.data;
		if ( data === undefined || data === '' || data.length === 0 ) {
			data = ApodList;
			// return (<div>Please Wait...</div>);
		}
		console.log( 'data: [' + data + ']' );
		//
		let dataISS = this.state.dataISS;
		if ( dataISS === undefined || dataISS === '' || dataISS.length === 0 ) { // 
			dataISS = ISSList;
		}
		console.log( 'dataISS: [' + dataISS + ']' );
		let classy = this.state.classy;
		//
		return { data, dataISS , classy };
	}

	render() {
		let { data, dataISS , classy } = this.handleResponses();
		return ( // JSON.stringify( results )
			<div>
				<h3 className = { classy } >APOD</h3>&nbsp;&nbsp;
				ISS: { dataISS.message } / { dataISS.timestamp }
				(	{ dataISS.iss_position.longitude } ,
					{ dataISS.iss_position.latitude } )

			<br /><br /><div className = "basicsGroup">
				<input onChange={ this.handleChange } type="text"
					className="entr" value={ this.state.dateNew } />
				&nbsp;&nbsp;<h3>{ data.date } / { data.title }</h3>
				<div className = "basicsRow">
					<div className = "apodTxt">{ data.explanation }</div>
					<div className = "apodImg"><img style={ { width: "300px", height: "300px" } }
						src={ data.url } alt="url" /></div>
				</div>
				</div>
			</div>
		);
	}
}
export default Apods;
