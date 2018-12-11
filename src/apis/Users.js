import React, { Component } from 'react';
import { loadJson, handleResponse } from '../home/Utils';
import UsersList from './../resources/users.json'

const LINK_USER = 'https://randomuser.me/api/?results=';

class Users extends Component {

	constructor ( props ) { super( props ); this.state = { data: [], limit: 40 }; }

	componentDidMount() { loadJson( this, LINK_USER + this.state.limit ); }

	render() {
		let { data } = handleResponse( this, UsersList );
		return ( // JSON.stringify( results )
			<div>
				<h3 className = "basics">Users limited to: { this.state.limit }!</h3>
				<div className = "basicsGroup" >
				<div className = "basicsRow usersRow">
					<div className = "usersNum">#</div>
					<div className = "usersEml">email</div>
					<div className = "usersFst">first</div>
					<div className = "usersLst">last</div>
				</div>
				{
					data.results.map( ( item , index ) =>
						<div className = "basicsRow usersRow" key={ item.email } >
							<div className = "usersNum">{ index+1 }</div>
							<div className = "usersEml">{ item.email }</div>
							<div className = "usersFst">{ item.name.first }</div>
							<div className = "usersLst">{ item.name.last }</div>
						</div> )
				}
				</div>
			</div>
		);
	}
}
export default Users;