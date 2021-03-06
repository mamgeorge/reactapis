import React, { Component } from 'react';
import { loadJson, handleResponse } from '../home/Utils';
import PhotosList from './../resources/samples/photos.json'

const LINK_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

class Photos extends Component {

	constructor ( props ) { super( props ); this.state = { data: [], limit: 40 , classy: 'grayish' }; }

	componentDidMount() { loadJson( this, LINK_PHOTOS + '' ); }

	render() {
		let { data , classy } = handleResponse( this, PhotosList );
		return ( // JSON.stringify( data )
			<div>
				<h3 className={ 'basics ' + classy }>Photos limited to: { this.state.limit }!</h3>
				<div className="basicsGroup" >
					<div className="basicsRow">
						<div className="photosIds">id</div>
						<div className="photosTtl">title</div>
						<div className="photosUrl">url</div>
						<div className="photosThm">thm</div>
					</div>
					{
						data.slice( 0, this.state.limit ).map( ( item ) =>
							<div className="basicsRow" key={ item.id } >
								<div className="photosIds">{ item.id }</div>
								<div className="photosTtl">{ item.title }</div>
								<div className="photosUrl">
									<img className="smlimg" src={ item.url } alt="url" />
								</div>
								<div className="photosThm">
									<img className="smlimg" src={ item.thumbnailUrl } alt="thm" />
								</div>
							</div> )
					}
				</div>
			</div>
		);
	}
}
export default Photos;