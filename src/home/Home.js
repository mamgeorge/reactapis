import React, { Component } from 'react';
import redLogo from './../images/redLogo.png';

class Home extends Component {
	render() {
		return (
			<div><img className = "logo" src = { redLogo } alt = "redLogo" 
				style = {{ width: "200px" }} /></div>
		);
	}
}
export default Home;

