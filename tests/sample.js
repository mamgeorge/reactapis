
const xtra = require( './../src/resources/xtra.js' );
const assert = require( 'assert' );

// testResults
console.log( xtra.testResults( 0 , 0 ) );
console.log( xtra.testResults( 0 , 1 ) );

// mocha!
describe( 'calcRegression tests' , function( ) {

	it( 'should calc corr null' , function( ) { 
		const expects = -0.6318176543806739;
		let stats = xtra.calcRegression( null );
		let results = stats.line.corr;
		assert.equal( results , expects );
	} )

	it( 'should calc corr points' , function( ) { 
		const expects = -1;
		let lister = { 'points': [ [13 , 1 ] , [ 2 , 7 ] ] };
		let stats = xtra.calcRegression( lister );
		let results = stats.line.corr;
		assert.equal( results , expects );
	} )	
} );