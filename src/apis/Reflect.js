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
			<div className = "tbls" >
				<h3>Martin George</h3>
				<center><table width = "80%" ><tbody>
					{this.docReflection( ).reflect.map( ( itm , i ) => 
						<tr key = { i } >
							<th>{ i }</th>
							<th style = {{ textAlign: "left"}}>
								{ Object.keys( itm ) }</th>
							<td>{ itm[ Object.keys( itm ) ].toString( ) }</td>
						</tr>
					)}
				</tbody></table></center>
			</div>
		);
	}
}
export default Reflect;