// https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api

// console.log( JSON.stringify( this.state.data ) );
// fetch( url , { mode: 'no-cors' } )
export function loadJson( component, url ) {
	fetch( url )
		.then( response => response.json() )
		.then( data => { component.setState( { data , classy: '' } ) } )
		.catch( error => console.log( error ) );
}

export function loadJsonNoCors( component, url ) {
	fetch( url, { 
			mode: 'no-cors' ,
			headers: { 
				'Content-Type': 'text/json' ,
				'Access-Control-Allow-Credentials' : true,
				'Access-Control-Allow-Origin':'*',
				'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
				'Access-Control-Allow-Headers':'Content-Type'
			}
		} )
		.then( response => response.json() )
		.then( data => { component.setState( { data , classy: '' } ) } )
		.catch( error => console.log( error ) );
}

// CORS ( Cross-Origin Resource Sharing )
// CORB ( Cross-Origin Read Blocking )
export function loadXhr( component, url ) {
	var xhr = new XMLHttpRequest();
	if ( xhr ) {
		xhr.open( 'GET', url, true, 'mamgeorge@yahoo.com', 'qiao1003ZHIBBL' );
		xhr.withCredentials = true;
		xhr.setRequestHeader( 'Access-Control-Allow-Credentials', 'true' );
		xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*' );
		//	xhr.setRequestHeader( 'Access-Control-Allow-Origin', 'http://localhost:3000' );
		//	xhr.setRequestHeader( 'Access-Control-Allow-Methods', 'GET' );
		//	xhr.setRequestHeader( 'Access-Control-Allow-Headers', 'Content-Type' );
		//	xhr.setRequestHeader( 'Content-Type', ' application/json' );
		xhr.onreadystatechange = data => {
			if ( xhr.readyState === 4 ) {
				if ( xhr.status === 200 ) {
					component.setState( { data } )
					console.log( xhr.responseText )
				} else {
					console.log( "Error", xhr.statusText );
				}
			}
		};
		xhr.send();
	}
}

export function handleResponse( component , anyList ) {
	let data = component.state.data;
	if ( data === undefined || data === '' || data.length === 0 ) {
		data = anyList;
	}
	console.log( 'data: [' + data + ']' );
	let classy = component.state.classy;
	return { data , classy };
}
