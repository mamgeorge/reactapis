// using mocha, multiple tests

const xtra = require( '../../src/resources/xtra.js' );
const assert = require( 'assert' );

//
const lister = null ; // { 'points': [ [13 , 1 ] , [ 2 , 7 ] ] } ;
const stats = xtra.calcRegression( lister , 0 );

// mocha!
describe( 'testing calcRegression!' , function( ) {
	//
	it( 'should calc line slope' , function( ) { 
		const expects = -0.3387096774193548;
		let results = stats.line.slope;
		assert.equal( results , expects );
	} )
	//
	it( 'should calc line intercept' , function( ) { 
		const expects = 6.951612903225806;
		let results = stats.line.intercept;
		assert.equal( results , expects );
	} )
	//
	it( 'should calc line corr' , function( ) { 
		const expects = -0.6318176543806739;
		let results = stats.line.corr;
		assert.equal( results , expects );
	} )
	//
	it( 'should calc sums sumxys' , function( ) { 
		const expects = 211;
		let results = stats.sums.sumxys;
		assert.equal( results , expects );
	} )
	//
	it( 'should calc func SXYVL' , function( ) { 
		const expects = 365.61181600161666;
		let results = stats.func.SXYVL;
		assert.equal( results , expects );
	} )
	//
	it( 'should list points' , function( ) { 
		const expects = 7; // .points[0][0] = 13 ;
		let results = stats.lister.points.length;
		assert.equal( results , expects );
	} )	
} );