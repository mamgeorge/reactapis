const users = require( './asyncUsers' )

const waiter = 500

const findUserById = ( id ) => {
	return new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			const user = users.find( user => user.id == id )
			if ( !user ) {
				const error = new Error( `User with id: ${ id } was not found.` );
				return reject( error )
			}
			return resolve( {
				message: 'User found successfully.',
				user
			} )
		}, waiter )
	} )
}

const findUserByEmail = ( email ) => {
	return new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			const user = users.find( user => user.email == email )
			if ( !user ) {
				return reject( new Error( `User with email: ${ email } was not found.` ) )
			}
			return resolve( {
				message: 'User found successfully.',
				user
			} )
		}, waiter )
	} )
}

module.exports = {
	findUserByEmail,
	findUserById
}
