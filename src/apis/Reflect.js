import React, { Component } from 'react';

class Reflect extends Component {

	docReflection() {
		return ({
			"reflect": [
				{ "title": document.title },
				{ "clientWidth": document.body.clientWidth },
				{ "clientHeight": document.body.clientHeight },
				{ "pageXOffset": window.pageXOffset },
				{ "pageYOffset": window.pageYOffset },
				{ "availWidth": window.screen.availWidth },
				{ "availHeight": window.screen.availHeight },
				{ "location": window.location },
				{ "hash": window.location.hash },
				{ "host": window.location.host },
				{ "hostname": window.location.hostname },
				{ "href": window.location.href },
				{ "pathname": window.location.pathname },
				{ "port": window.location.port },
				{ "protocol": window.location.protocol },
				{ "search..": window.location.search },
				{ "appCodeName": navigator.appCodeName },
				{ "appName": navigator.appName },
				{ "appVersion": navigator.appVersion },
				{ "language": navigator.language },
				{ "mimeTypes": navigator.mimeTypes.length },
				{ "platform": navigator.platform },
				{ "plugins": navigator.plugins.length },
				{ "userAgent": navigator.userAgent }
			]
		});

	}

	render() {
		return (
			<div>
				<h3 className = "reflect">Reflection</h3>
				<div className = "reflectGroup">
					{this.docReflection( ).reflect.map( ( itm , ictr ) => 
						<div className = "reflectRow">
						<div className = "reflectNum" key = { ictr } >{ ictr+1 }</div>
						<div className = "reflectKey">{ Object.keys( itm ) }</div>
						<div className = "reflectDat">
							{ itm[ Object.keys( itm ) ].toString( ) }
							</div>
						</div>
					)}
				</div>	
			</div>
		);
	}
}
export default Reflect;