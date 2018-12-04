import React, { Component } from 'react';

class Index extends Component {
	render( ) {
		return (
			<div> 
				<a href = '/' >home</a>
				<a href = '/author' >Author ( inline ) </a>
				<a href = '/reflect' >Reflect ( class ) </a>
				<a href = '/controls' >Controls ( RPi ) </a>
				<hr />
				<a href = '/users' >Users ( random ) </a>
				<a href = '/photos' >Photos ( thumbnails )</a>
				<a href = '/hacks' >Hacks ( articles ) </a>
				<a href = '/apod' >Apod ( NASA API ) </a>
				<hr />
				<a href = '/paged' >Paged ( pagination ) </a>
				<a href = '/word' >Logos ( Bible verse )</a>
			</div>
		);
	}
}
export default Index;
