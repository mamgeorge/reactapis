// https://www.programmableweb.com/category/history/api
// http://awmc.unc.edu/wordpress/api-documentation/

import React, { Component } from 'react';
import { loadJsonNoCors, handleResponse } from '../home/Utils';
import ArchsList from './../resources/samples/archs.json'

const LINK_ARCHS = 'http://awmc.unc.edu/api/omnia/';
const LINK_SFFX = '168940/json';

class Archs extends Component {

	constructor ( props ) { super( props ); this.state = { data: [] , classy: 'grayish' }; }

	componentDidMount() { loadJsonNoCors( this, LINK_ARCHS + LINK_SFFX ); }

	render() {
		let { data , classy } = handleResponse( this, ArchsList );
		return ( // JSON.stringify( results )
			<div>
				<h3 className={ 'basics ' + classy } >Archs</h3>
				<div className = "basicsGroup" >
				<div className = "basicsRow archsRow" >
					<div className = "archsCell" >{ data.features[0].properties.awmc_id }</div>
					<div className = "archsCell" >{ data.features[0].properties.title }</div>
					<div className = "archsCelq" >{ /* data.features[0].properties.awmc_link */ }</div>
					<div className = "archsCelq" >{ /* data.features[0].properties.pleiades_link */ }</div>
					<div className = "archsCell" >{ data.features[0].properties.description }</div>
				</div>
				</div>
			</div>
		);
	}
}
export default Archs;