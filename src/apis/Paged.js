import React, { Component } from 'react';
import { loadJson, handleResponse } from '../home/Utils';
import PhotosList from './../resources/samples/photos.json'

const LINK_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

// https://www.npmjs.com/package/react-paginate
class Paged extends Component {

	constructor ( props ) {
		super( props ); this.state = {
			data: [], starter: 0, offsets: 80, limit: 400 , classy: 'grayish'
		};
	}

	componentDidMount() { loadJson( this, LINK_PHOTOS + '' ); }

	handlePage( incr ) {
		let starter = this.state.starter;
		if ( starter + incr < 0 || starter + incr > this.state.limit ) { } else {
			this.setState( { starter: starter + incr } );
		}
	}

	handleBreak( indx ) {
		if ( ( indx + 1 ) % 8 === 0.0 ) { return <br />; }
	}

	parseNumber( nmb ) {
		let str = '';
		if ( nmb <= 9 ) str = '00' + nmb;
		if ( nmb > 9 && nmb < this.state.limit ) str = '0' + nmb;
		return str;
	}

	render() {
		let starter = this.state.starter;
		let offsets = this.state.offsets;
		let { data , classy } = handleResponse( this, PhotosList );
		return ( // JSON.stringify( data )
			<div>
				<h3 className={ 'basics ' + classy }>Paged range is: { offsets }!</h3>
				<div className="basicsGroup" >{
					data.slice( starter, starter + offsets ).map( ( item, index ) =>
						<span className="" key={ item.id } >
							<span className="pagedIds" >{ this.parseNumber( item.id ) }</span>&nbsp;
							<span className="pagedImg" ><img className="smlimg" src={ item.url } alt="url" /></span>
							<span className="pagedImg" ><img className="smlimg" src={ item.thumbnailUrl } alt="thm" /></span>
							{ this.handleBreak( index ) }
						</span>
					)
				}
				</div>
				<div className="basics">
					<input onClick={ () => this.handlePage( -10 ) } className="btn" defaultValue="<<" />
					<input onClick={ () => this.handlePage( 10 ) } className="btn" defaultValue=">>" />
				</div>
			</div>
		);
	}
}
export default Paged;