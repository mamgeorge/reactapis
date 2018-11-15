import React, { Component } from 'react';
import { loadJson } from '../home/Utils';
import UserList from './../resources/user.json'

const LINK_USER = 'https://randomuser.me/api/?results=';
const RETURNS = '10';

class Users extends Component {

	constructor(props) { super(props); this.state = { data: [ ] , }; }
	
	componentDidMount( ) { loadJson( this , LINK_USER + RETURNS ); }

	render() {
		let results = this.state.data.results;
		if (results === undefined) {
			results = UserList.results;
			return (<div>please refresh</div>);
		} else {
			return ( // JSON.stringify( results )
				<div className = "tbls" ><center><table><tbody>
					<tr><th>email</th><th>first</th><th>last</th></tr>
					{
						results.map((item) =>
							<tr key={item.email} >
								<td>{item.email}</td>
								<td>{item.name.first}</td>
								<td>{item.name.last}</td>
							</tr>)
					}
				</tbody></table></center></div>
			);
		}
	}
}
export default Users;