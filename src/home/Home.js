import React, { Component } from 'react';
import redLogo from './../images/redLogo.png';

class Home extends Component {
	render() {
		return (
			<div className = "tbls" >
				<img className = "logo" src = { redLogo } alt = "redLogo" 
					style = {{ top: "40%" , position: "relative" , width: "100px" }} />
			</div>
		);
	}
}
export default Home;

