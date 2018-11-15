import React, { Component } from 'react';

class Index extends Component {
	render( ) {
		return (
			<div style={{ backgroundColor: '#303030' , textAlign: 'left', paddingLeft: "10px" }} > 
				<br /><a href = '/' >home</a>
				<br /><a href = '/name' >Author	</a>
				<br /><a href = '/date' >Dated	</a>
				<br /><br /><hr />
				<br /><a href = '/users' >Users	</a>
				<br /><a href = '/hacks' >Hacks	</a>
				<br /><a href = '/photos' >Photos</a>
				<br /><a href = '/apod' >Apod	</a>
				<br /><br /><hr />
				<br /><a href = '/paged' >Paged</a>
				<br /><a href = '/word' >Logos	</a>
				<br /><br />
			</div>
		);
	}
}
export default Index;
