// using async

const assert = require( 'assert' )
const { findUserByEmail, findUserById } = require( '../../src/resources/tests/async' )

describe( 'The async tests', () => {
	//
	describe( 'The findUserById function', () => {
		//
		it.skip( 'should return found user data by id 0 ( result unsynched )', () => {
			result = findUserById( 1 )
			console.log( '\t### result: ', result )
			assert.equal( result.user.name, 'mamgeorge' )
			// result:  Promise { <pending> } 
		} )
		it( 'should return found user data by id 1 ( using the done callback )', (done) => {
			findUserById( 1 ).then( result => {
				assert.equal( result.user.name, 'mamgeorge' )
				done();
			} )
		} )
		it( 'should return found user data by id 2 ( returning the promise )', () => {
			return findUserById( 1 ).then( result => {
				assert.equal( result.user.name, 'mamgeorge' )
			} )
		} )	
		it( 'should return found user data by id 3 ( using await function )', async () => {
			const result = await findUserById( 1 )
			assert.equal( result.user.name, 'mamgeorge' )
		} )
		it( 'should return found user message', async () => {
			const result = await findUserById( 1 )
			assert.equal( result.message, 'User found successfully.' )
		} )
		it( 'should return reject user message', async () => {
			const id = 90909;
			return findUserById( id ).catch( error => {
				assert.equal( error, `Error: User with id: ${id} was not found.` )
			} )
		} )	
		it( 'should throw an error if id not found 3', () => {
			const id = 90909;
			return findUserById( id ).catch( error => {
				// console.log( '### result3: ', result )
				assert.equal( error.message, `User with id: ${id} was not found.` )
			} )
		} )
	} )

	describe( 'The findUserByEmail', function () {
		//
		it( 'should find user by email', function () {
			const email = 'mamgeorge@gmail.com';
			return findUserByEmail( email ).then( result => {
				assert.equal( result.user.id, 1 )
				assert.equal( result.user.email, email )
			} )
		} )
		it( 'should throw an error if user was not found by email', () => {
			const email = 'hamgeorge@gmail.com';
			return findUserByEmail( email ).catch( error => {
				assert.equal( error.message, `User with email: ${email} was not found.` )
			} )
		} )
	} )
} )