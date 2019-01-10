// using mocha, multiple tests

const interpolation = require( '../../src/resources/interpolation.js' );
const assert = require( 'assert' );

const lister = null; // { 'points': [ [13 , 1 ] , [ 2 , 7 ] ] } ;
const stats = interpolation.calcRegression( lister, 0 );

// mocha!
describe( 'testing interpolation!', function () {
	//
	describe( 'testing calculations!', function () {
		//
		it( 'should calc line slope, default list, default log', function () {
			const expects = -0.3387096774193548;
			let results = stats.line.slope;
			assert.equal( results, expects );
		} )
		//
		it( 'should calc line intercept', function () {
			const expects = 6.951612903225806;
			let results = stats.line.intercept;
			assert.equal( results, expects );
		} )
		//
		it( 'should calc line corr', function () {
			const expects = -0.6318176543806739;
			let results = stats.line.corr;
			assert.equal( results, expects );
		} )
		//
		it( 'should calc sums sumxys', function () {
			const expects = 211;
			let results = stats.sums.sumxys;
			assert.equal( results, expects );
		} )
		//
		it( 'should calc func SXYVL', function () {
			const expects = 365.61181600161666;
			let results = stats.func.SXYVL;
			assert.equal( results, expects );
		} )
		//
		it( 'should list points', function () {
			const expects = 7; // .points[0][0] = 13 ;
			let results = stats.lister.points.length;
			assert.equal( results, expects );
		} )
	} );
	//
	it( 'should calc line slope, 2 points, log line', function () {
		const lister = { 'points': [ [ 13 , 1 ] , [ 2 , 7 ] ] } ;
		const stats = interpolation.calcRegression( lister, 1 );
		const expects =-0.5454545454545454;
		let results = stats.line.slope;
		assert.equal( results, expects );
	} )
	it( 'should calc line slope, default list, log full', function() {
		const stats = interpolation.calcRegression( lister, 2 );
		const expects = -0.3387096774193548;
		let results = stats.line.slope;
		assert.equal( results, expects );
	} )	
} );