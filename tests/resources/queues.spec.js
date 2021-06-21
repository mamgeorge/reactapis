// using async

const assert = require( 'assert' )
const { init } = require( '../../src/resources/tests/queues' )

describe( 'The queues tests', () => {
	//
	describe( 'The init function', () => {
		//
		it( 'should return queue by id', () => {
			return init( 1 ).then( result => {
				console.log( '### result: ', result )
				assert.equal( result.queue.dateEnd, '2019-02-20 03:05:00' )
			} )
		} )
		it( 'should throw an error if id not found', () => {
			return init( 9999 ).catch( error => {
				// console.log( '### result: ', result )
				assert.equal( error.message, 'queue[9999] not found.' )
			} )
		} )
	} )
} )