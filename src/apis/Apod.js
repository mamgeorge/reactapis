import React, { Component } from 'react';
import { loadJson, loadApi } from '../home/Utils';
import { dateTimeFormat } from './../resources/basics.js'
import ApodList from './../resources/apod.json'
import ISSList from './../resources/iss.json'

const LINK_APOD = 'https://api.nasa.gov/planetary/apod?date=';
const NASA_API_KEY = '&api_key=Oo7FtQjALw01loIt8b7nD5aqA1sIb44LSqSjQS9w';
const LINK_ISS = 'http://api.open-notify.org/iss-now.json';

class Apod extends Component {

	constructor ( props ) {
		super( props );
		this.state = { data: [], dataISS: [], dateNew: '' };
		this.handleChange = this.handleChange.bind( this );
	}

	componentDidMount() {
		this.getDateFormatted();
		loadJson( this, LINK_APOD + this.state.dateNew + NASA_API_KEY );
		loadApi( this, LINK_ISS );
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
		//	
		return { data, dataISS };
	}

	render() {
		let { data, dataISS } = this.handleResponses();
		return ( // JSON.stringify( results )
			<div>
				<h3>APOD</h3>&nbsp;&nbsp;
				ISS: { dataISS.message } / { dataISS.timestamp }
				(	{ dataISS.iss_position.longitude } ,
					{ dataISS.iss_position.latitude } )

			<br /><br /><div className = "apodGroup">
				<input onChange={ this.handleChange } type="text"
					className="entr" value={ this.state.dateNew } />
				&nbsp;&nbsp;<h3>{ data.date } / { data.title }</h3>
				<div className = "apodRow">
					<div className = "apodTxt">{ data.explanation }</div>
					<div className = "apodImg"><img style={ { width: "300px", height: "300px" } }
						src={ data.url } alt="url" /></div>
				</div>
				</div>
			</div>
		);
	}
}
export default Apod;
