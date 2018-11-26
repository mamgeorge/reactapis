import React, { Component } from 'react';
import { loadJson, handleResponse } from '../home/Utils';
import PhotosList from './../resources/photos.json'

const LINK_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

// https://www.npmjs.com/package/react-paginate
class Paged extends Component {

	constructor(props) { super(props); this.state = { 
		data: [], starter: 0, offsets: 40, limit: 200 }; 
	}

	componentDidMount() { loadJson(this, LINK_PHOTOS + ''); }

	handlePage(incr) {
		let starter = this.state.starter;
		if (starter + incr < 0 || starter + incr > this.state.limit ) { } else {
			this.setState({ starter: starter + incr });
		}
	}

	handleBreak(indx) {
		if ((indx + 1) % 10 === 0.0) { return <br />; }
	}

	parseNumber(nmb) {
		let str = '';
		if (nmb <= 9) str = '00' + nmb;
		if (nmb > 9 && nmb < 100) str = '0' + nmb;
		return str;
	}

	render() {
		let starter = this.state.starter;
		let offsets = this.state.offsets;
		let { data } = handleResponse(this, PhotosList);
		return ( // JSON.stringify( data )
			<center>
				<b>Limiting range to: { offsets }!</b>
				<table><tbody><tr><td style={{ padding: "10px" }} >
					{
						data.slice(starter, starter + offsets).map((item, index) =>
							<span key={item.id} >
								{this.parseNumber(item.id)}
								<img className="sml" src={item.url} alt="url" />
								<img className="sml" src={item.thumbnailUrl} alt="thm" />
								{this.handleBreak(index)}
							</span>
						)
					}
				</td></tr></tbody></table>
				<br /><br />
				<input onClick={() => this.handlePage(-10)} className="btn" defaultValue="<<" />
				<input onClick={() => this.handlePage(10)} className="btn" defaultValue=">>" />
				<br /><br />
			</center>
		);
	}
}
export default Paged;