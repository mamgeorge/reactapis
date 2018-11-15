import React, { Component } from 'react';
import { loadJson } from '../home/Utils';
import PhotoList from './../resources/photos.json'

const LINK_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

class Photos extends Component {

	constructor(props) { super(props); this.state = { data: [ ], }; }

	componentDidMount( ) { loadJson( this , LINK_PHOTOS + '' ); }

	render( ) {
		let data = this.state.data;
		if ( data === undefined ) { 
			data = PhotoList; 
			return ( <div>please refresh</div> );
		} else {
			return ( // JSON.stringify( data )
			<div className = "tbls"><center><table><tbody>
				<tr><th>id</th><th>title</th><th>url</th><th>thumbnail</th></tr>
				{
					PhotoList.map((item) =>
						<tr key={item.id} >
							<th>{item.id}</th>
							<td>{item.title}</td>
							<td><img className = "sml" src = {item.url} alt = "url" /></td>
							<td><center>
								<img className = "sml" src = {item.thumbnailUrl} alt = "thm" /></center></td>
						</tr>)
				}
			</tbody></table></center></div>
			);
		}
	}
}
export default Photos;