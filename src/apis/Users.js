import React, { Component } from 'react';
import { loadJson, handleResponse } from '../home/Utils';
import UsersList from './../resources/users.json'

const LINK_USER = 'https://randomuser.me/api/?results=';

class Users extends Component {

	constructor(props) { super(props); this.state = { data: [], limit: 40 }; }

	componentDidMount() { loadJson(this, LINK_USER + this.state.limit); }

	render() {
		let { data } = handleResponse(this, UsersList);
		return ( // JSON.stringify( results )
			<div className="tbls" ><center>
				<b>Limiting users to: { this.state.limit }!</b>
				<table><tbody>
				<tr><th>email</th><th>first</th><th>last</th></tr>
				{
					data.results.map((item) =>
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
export default Users;