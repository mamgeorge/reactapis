// https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api

export function loadApi(component , url) {
	fetch(url)
		.then(response => response.json())
		.then(dataISS => { component.setState({ dataISS }) })
		.catch(error => console.log(error));
}

// console.log( JSON.stringify( this.state.data ) );
// fetch( url , { mode: 'no-cors' } )
export function loadJson(component, url) {
	fetch(url)
		.then(response => response.json())
		.then(data => { component.setState({ data }) })
		.catch(error => console.log(error));
}

export function loadApiNoCors(component, url) {
	fetch(url, { mode: 'no-cors' })
		.then(response => response)
		.then(data => { component.setState({ data }) })
		.catch(error => console.log(error));
}


// CORS ( Cross-Origin Resource Sharing )
// CORB ( Cross-Origin Read Blocking )
export function loadXhr(component, url) {
	var xhr = new XMLHttpRequest();
	if (xhr) {
		xhr.open('GET', url, true, 'mamgeorge@yahoo.com', 'qiao1003ZHIBBL');
		xhr.withCredentials = true;
		xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
		xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		//	xhr.setRequestHeader( 'Access-Control-Allow-Origin', 'http://localhost:3000' );
		//	xhr.setRequestHeader( 'Access-Control-Allow-Methods', 'GET' );
		//	xhr.setRequestHeader( 'Access-Control-Allow-Headers', 'Content-Type' );
		//	xhr.setRequestHeader( 'Content-Type', ' application/json' );
		xhr.onreadystatechange = data => { component.setState({ data }) };
		xhr.send();
	}
}
