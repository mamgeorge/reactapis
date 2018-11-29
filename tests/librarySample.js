
// a simple assertion library
module.exports.assertNew = function( actual , expected ) {
	const equal = function( actual , expected ) {
		if ( actual != expected ) {
			throw new Error( `Expeced actual ${ actual } to equal ${ expected }!` );
		}
	}
	equal( actual , expected );
}

// a simple test runner
module.exports.testRunner = function ( testTitle , callBack ) {
	console.log( 'testing showCube!\n' );
	try {
		callBack( ) ;
		console.log( `Passed: ${ testTitle }` );
	}
	catch( error ) {
		console.log( `Failed: ${ testTitle }` );
		// throw error ;
	}
	console.log( `\n\n` );
}

// module.exports = { assertNew , testRunner }