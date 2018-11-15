import React, { Component } from 'react';
import { loadJson } from '../home/Utils';
import ApodList from './../resources/apod.json'

// https://api.nasa.gov/api.html#apod , https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
const LINK_APOD = 'https://api.nasa.gov/planetary/apod?date=2018-01-02&api_key=';
const NASA_API_KEY = 'Oo7FtQjALw01loIt8b7nD5aqA1sIb44LSqSjQS9w';

class Apod extends Component {

	constructor(props) { super(props); this.state = { data: [ ], }; }

	componentDidMount( ) { loadJson( this , LINK_APOD + NASA_API_KEY ); }

	render( ) {
		let data = this.state.data;
		if (data === undefined || data === '' ) {
			data = ApodList;
			return ( <div>Please Wait...</div> );
		}
		return ( // JSON.stringify( results )
			<div><center><table><tbody>
				<tr key={data.date} >
					<th>{data.date}</th>
					<th>{data.title}</th>
					</tr>
				<tr>
					<td>{data.explanation}</td>
					<td><center><img width = "300" src={data.url} alt="url" /></center></td>
					</tr>
			</tbody></table></center></div>
		);
	}
}
export default Apod;
