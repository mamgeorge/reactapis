const { parse, stringify } = require('../src/resources/xtra_parseString.js');
const assert = require('assert');

describe('testing parseString file!', function () {

	describe('testing parse method!', function () {
		//
		it('should convert query to object', function () {
			const expects = { first: 'Martin', last: 'George' };
			let results = parse('?first=Martin&last=George');
			assert.deepEqual(results, expects);
		})
	})
	describe('testing stringify method!', function () {
		//
		it('should stringify', function () {
			const expects = 'first=Mary&last=George';
			let results = stringify(  { first: 'Mary', last: 'George' } );
			assert.equal(results, expects);
		})
	})
})