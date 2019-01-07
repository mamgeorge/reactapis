// formatted sample

const { parse, stringify } = require( '../src/resources/xtra_parseString.js' );
const assert = require('assert');

describe('GROUP', function () {

	describe('METHOD', function () {
		//
		it( 'SHOULD DO' , function () {
			const expects = { first: 'Martin', last: 'George' };
			let results = parse('?first=Martin&last=George');
			assert.deepEqual(results, expects);
		})
	})
})
