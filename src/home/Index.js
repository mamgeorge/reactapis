import React, { Component } from 'react';

class Index extends Component {
	render( ) {
		return (
			<div style={{ backgroundColor: '#303030' , textAlign: 'left', paddingLeft: "10px" }} > 
				<br /><a href = '/' >home</a>
				<br /><a href = '/name' >Author ( class ) </a>
				<br /><a href = '/date' >Dated ( inline ) </a>
				<br /><br /><hr />
				<br /><a href = '/users' >Users ( random ) </a>
				<br /><a href = '/photos' >Photos ( thumbnails )</a>
				<br /><a href = '/hacks' >Hacks ( articles ) </a>
				<br /><a href = '/apod' >Apod ( NASA API ) </a>
				<br /><br /><hr />
				<br /><a href = '/paged' >Paged ( pagination ) </a>
				<br /><a href = '/word' >Logos ( Bible verse )</a>
				<br /><br />
			</div>
		);
	}
}
export default Index;
