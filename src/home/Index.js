import React, { Component } from 'react';

class Index extends Component {
	render( ) {
		return (
			<div> 
				<a href = '/' >home</a>
				<a href = '/author' >Author ( inline ) </a>
				<a href = '/reflect' >Reflect ( class ) </a>
				<hr />
				<a href = '/users' >Users ( random ) </a>
				<a href = '/photos' >Photos ( thumbnails )</a>
				<a href = '/paged' >Paged ( pagination ) </a>
				<a href = '/hacks' >Hacks ( articles ) </a>
				<hr />
				<a href = '/apods' >Apods ( NASA API ) </a>
				<hr />
				<a href = '/archs' >Archs () </a>
				<a href = '/taxons' >Taxons () </a>
				<a href = '/controls' >Controls ( RPi ) </a>
				<a href = '/logos' >Logos ( Bible verse )</a>
			</div>
		);
	}
}
export default Index;
