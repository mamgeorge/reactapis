import React, { Component } from 'react';
import { loadXhr } from '../home/Utils';
import LogosList from './../resources/logo0.json'

// https://scripture.api.bible/
// "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/verses/LUK.1.1?content-type=json&include-notes=false&include-titles=false&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false"
// "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/verses/LUK.1.1
const LINK_LOGOS =  "https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/verses/LUK.1.1?api-key="
const BIBLE_API_KEY = '69b0ff6d9ee80f9c90c5ee092b2a48e7';
// https://accounts.bibles.org/users/edit
// https://bibles.org/pages/api/documentation/verses
// const LINK_LOGOS = 'https://bibles.org/v2/passages.js?q[]=john+3:1-5&version=eng-KJVA&api-key=';
// const BIBLE_API_KEY = 'S8MGX3SDLDtPJyFLVjIp1pA4bhU6i3zypqKkhR6r';

class Logos extends Component {

	constructor(props) { super(props); this.state = { data: [ ], }; }

	componentDidMount( ) { loadXhr( this , LINK_LOGOS + BIBLE_API_KEY ); }

	render( ) {
		let data = this.state.data;
		if (data === undefined || data === '' ) {
			data = LogosList;
			console.log( 'BLANK: ' + data );
			return ( <div>Please Wait...</div> );
		}
		return (
			// JSON.stringify( results )
			// { data.response.search.result.passages.text }
			// { content }
			<div><center>[
				{ LogosList.response.search.result.passages.map( ( item ) => item.text ) } ]</center></div>
		);
	}
}
export default Logos;
