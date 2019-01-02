// https://www.gbif.org/developer/summary
// http://api.gbif.org/v1/

import React, { Component } from 'react';
import { loadJson, handleResponse } from '../home/Utils';
import TaxonsList from './../resources/samples/taxons.json'

const LINK_TAXONS = 'http://api.gbif.org/v1';
const LINK_OCC_PARMS = '/occurrence/search?year=1800,1899';

class Taxons extends Component {

	constructor ( props ) { super( props ); this.state = { data: [], }; }

	componentDidMount() { loadJson( this, LINK_TAXONS + LINK_OCC_PARMS ); }

	getColor( kingdom ) { 
		let color = 'white';
		if ( kingdom==='Plantae' ) { color = 'lightgreen' } 
		if ( kingdom==='Animalia' ) { color = 'cyan' }
		return color;
	}

	render() {
		let { data } = handleResponse( this, TaxonsList );
		return ( // JSON.stringify( results )
			<div>
				<h3 className="basics" >Taxons from GBIF</h3>
				<h5 className="basics" >Global Biodiversity Information Facility</h5>
				<div className = "basicsGroup" >
				<div className = "basicsRow taxonsRow" style = {{ color: "yellow" }}>
					<div className = "taxons1" >phylum</div>
					<div className = "taxons2" >class </div>
					<div className = "taxons3" >order </div>
					<div className = "taxons4" >family</div>
					<div className = "taxons5" >genus </div>
					<div className = "taxons6" >species</div>
					<div className = "taxons7" >genericName</div>
					</div>
				{ data.results.map( ( index ) => 
				<div className = "basicsRow taxonsRow" key = { index.key } 
					style = {{ color: this.getColor(index.kingdom) }}>
					<div className = "taxons1" >{ index.phylum }</div>
					<div className = "taxons2" >{ index.class }</div>
					<div className = "taxons3" >{ index.order }</div>
					<div className = "taxons4" >{ index.family }</div>
					<div className = "taxons5" >{ index.genus }</div>
					<div className = "taxons6" >{ index.specificEpithet }</div>
					<div className = "taxons7" >{ index.genericName }</div>
					</div>
				) }
				</div>
			</div>
		);
	}
}
export default Taxons;