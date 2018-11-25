import React, { Component } from 'react';
import redLogo from './../images/redLogo.png';

class Header extends Component {
	render() {
		return (
			<div style={{ backgroundColor: '#303030' }} >
				<table width="100%" ><tbody><tr>
					<td style={{ border: "0px" }} >
						<a href="/" ><img className="logo" src={redLogo} alt="redLogo" /></a>
						</td>
					<td  width="100%" style={{ border: "0px" }} >
						<a href="/name" ><h1>MLG Website</h1></a>
						</td>
				</tr></tbody></table>
			</div>
		);
	}
}

export default Header;