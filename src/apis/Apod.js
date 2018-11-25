import React, { Component } from 'react';
import { loadJson, loadApi } from '../home/Utils';
import { dateTimeFormat } from './../resources/basics.js'
import ApodList from './../resources/apod.json'
import ISSList from './../resources/iss.json'

const LINK_APOD = 'https://api.nasa.gov/planetary/apod?date=';
const NASA_API_KEY = '&api_key=Oo7FtQjALw01loIt8b7nD5aqA1sIb44LSqSjQS9w';
const LINK_ISS = 'http://api.open-notify.org/iss-now.json';

class Apod extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			dataISS: [],
		};
	}

	componentDidMount() {
		loadJson(this, this.getLinkApod_Date());
		loadApi(this, LINK_ISS);
	}

	getLinkApod_Date() {
		let date = new Date();
		let dateFormatted = dateTimeFormat( date , 'yyyy-mm-dd' );
		let urlDate = LINK_APOD + dateFormatted + NASA_API_KEY;
		return urlDate;
	}

	handleResponses() {
		let dataISS = this.state.dataISS;
		if (dataISS === undefined || dataISS === '' || dataISS.length === 0) { // 
			dataISS = ISSList;
		}
		console.log('dataISS: [' + dataISS + ']');
		//
		let data = this.state.data;
		if (data === undefined || data === '') {
			data = ApodList;
			// return (<div>Please Wait...</div>);
		}
		console.log('dataApd: [' + data + ']');
		return { dataISS, data };
	}	

	render() {
		let { dataISS, data } = this.handleResponses();
		return ( // JSON.stringify( results )
			<div><center><table><tbody>
				<tr>
					<th>ISS</th>
					<td><center>
						{dataISS.message} /
						{dataISS.timestamp} <br /> 
						(	{dataISS.iss_position.longitude} , 
							{dataISS.iss_position.latitude} )
						</center></td>
				</tr>
				<tr key={data.date} >
					<th>{data.date}</th>
					<th>{data.title}</th>
				</tr>
				<tr>
					<td>{data.explanation}</td>
					<td><center><img width="300" src={data.url} alt="url" /></center></td>
				</tr>
			</tbody></table></center></div>
		);
	}
}
export default Apod;
