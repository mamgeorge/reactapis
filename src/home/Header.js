import React, { Component } from 'react';
import redLogo from './../images/reactrouter.png';

class Header extends Component {

	goHome() { window.location.href = '/'; }
	goName() { window.location.href = '/author'; }

	render() {
		return (
			<div className = "headerRow">
				<img className = "headerRow logo" onClick={ this.goHome }
					src={ redLogo } alt="redLogo" />

				<b className = "headerRow" onClick={ this.goName } >MLG Website</b>
			</div>
		);
	}
}

export default Header;