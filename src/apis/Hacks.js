import React, { Component } from 'react';
import { loadJson , handleResponse } from '../home/Utils';
import HacksList from './../resources/hacks.json'

const LINK_HACKS = 'https://hn.algolia.com/api/v1/search?query=';

class Hacks extends Component {

	constructor(props) { super(props);
		this.state = { data: [], query: 'react' }; 
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() { loadJson(this, LINK_HACKS + this.state.query ); }
	
	handleChange( evnt ) {
		let queried = evnt.target.value;
		this.setState( { query: queried } ); 
		loadJson(this, LINK_HACKS + this.state.query );
	}

	render() {
		let { data } = handleResponse( this, HacksList );
		return ( // JSON.stringify( results )
			<div>
				<h3 className="basics" >Hacks returned:&nbsp;<input onChange = { this.handleChange } 
					className = "entr" type = "text" value = { this.state.query } /> !
					</h3>
				<div className="basicsGroup" >
				<div className="basicsRow" >
					<div className="hacksNum" >#</div>
					<div className="hacksAth" >author</div>
					<div className="hacksTtl" >title</div>
					<div className="hacksPnt" >points</div>
					</div>
				{
					data.hits.map( ( item , index ) =>
						<div className="basicsRow" key={item.created_at} >
							<div className="hacksNum" >{index+1}</div>
							<div className="hacksAth" ><a href = {item.url} target = {"_blank"} >{item.author}</a></div>
							<div className="hacksTtl" ><a href = {item.url} target = {"_blank"} >{item.title}</a></div>
							<div className="hacksPnt" title = {item.points}>
								{item.created_at.substring(0,10)}
								</div>
						</div>)
				}
			</div></div>
		);
	}
}
export default Hacks;