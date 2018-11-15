import React, { Component } from 'react';
import { loadJson } from '../home/Utils';
import HacksList from './../resources/hacks.json'

const LINK_HACKS = 'https://hn.algolia.com/api/v1/search?query=';
const QUERY = 'redux';

class Hacks extends Component {

	constructor(props) { super(props); this.state = { data: [], }; }

	componentDidMount( ) { loadJson( this , LINK_HACKS + QUERY ); }

	render( ) {
		let hits = this.state.data.hits;
		if ( hits === undefined ) { 
			hits = HacksList.results; 
			return ( <div>please refresh</div> );
		} else {
			return ( // JSON.stringify( results )
			<div className = "tbls" ><center><table><tbody>
				<tr><th>author</th><th>title</th><th>points</th></tr>
				{
					hits.map( ( item ) =>
						<tr key={item.created_at} >
							<td>{item.author}</td>
							<td>{item.title}</td>
							<td>{item.points}</td>
						</tr>)
				}
			</tbody></table></center></div>
			);
		}
	}
}
export default Hacks;