// using mocha, multiple describes ( nested )

const { parse, stringify } = require('../../src/resources/tests/parseString.js');
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
	describe('testing parse method without ?', function () {
		//
		it('should convert query to object', function () {
			const expects = { first: 'Martin', last: 'George' };
			let results = parse('first=Martin&last=George');
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
	describe('testing stringify method null!', function () {
		//
		it('should stringify', function () {
			const expects = 'last=George';
			let results = stringify(  { first: null, last: 'George' } );
			assert.equal(results, expects);
		})
	})
})