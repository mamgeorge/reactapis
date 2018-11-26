import React, { Component } from 'react';
import { loadJson , handleResponse } from '../home/Utils';
import HacksList from './../resources/hacks.json'

const LINK_HACKS = 'https://hn.algolia.com/api/v1/search?query=';

class Hacks extends Component {

	constructor(props) { super(props);
		this.state = { data: [], query: 'react' }; 
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() { loadJson(this, LINK_HACKS + this.state.query ); }
	
	handleChange( evnt ) {
		let queried = evnt.target.value;
		this.setState( { query: queried } ); 
		loadJson(this, LINK_HACKS + this.state.query );
	}

	render() {
		let { data } = handleResponse( this, HacksList );
		return ( // JSON.stringify( results )
			<div className="tbls" ><center>
				<b>Returning hits for: <input onChange = { this.handleChange } 
					className = "entr" type = "text" value = { this.state.query } /> !
					</b>
				<table><tbody>
				<tr><th>author</th><th>title</th><th>points</th></tr>
				{
					data.hits.map((item) =>
						<tr key={item.created_at} >
							<td><a href = {item.url} target = {"_blank"} >{item.author}</a></td>
							<td><a href = {item.url} target = {"_blank"} >{item.title}</a></td>
							<td title = {item.points}>{item.created_at.substring(0,10)}</td>
						</tr>)
				}
			</tbody></table></center></div>
		);
	}
}
export default Hacks;