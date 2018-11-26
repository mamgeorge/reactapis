import React, { Component } from 'react';
import { loadJson, handleResponse } from '../home/Utils';
import PhotosList from './../resources/photos.json'

const LINK_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

class Photos extends Component {

	constructor(props) { super(props); this.state = { data: [], limit: 40 }; }

	componentDidMount() { loadJson(this, LINK_PHOTOS + ''); }

	render() {
		let { data } = handleResponse(this, PhotosList);
		return ( // JSON.stringify( data )
			<div className="tbls"><center>
				<b>Limiting photos to: { this.state.limit }!</b>
				<table><tbody>
				<tr><th>id</th><th>title</th><th>url</th><th>thumbnail</th></tr>
				{
					data.slice( 0 , this.state.limit ).map((item) =>
						<tr key={item.id} >
							<th>{item.id}</th>
							<td>{item.title}</td>
							<td><img className="sml" src={item.url} alt="url" /></td>
							<td><center>
								<img className="sml" src={item.thumbnailUrl} alt="thm" /></center></td>
						</tr>)
				}
			</tbody></table></center></div>
		);
	}
}
export default Photos;