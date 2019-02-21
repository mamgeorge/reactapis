const queues = require( './queuesState' )

const waiter = 500

const init = ( id ) => {
	return new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			const queue = queues.find( queue => queue.id == id )
			if ( !queue ) {
				return reject( new Error( `queue[${ id }] not found.` ) )
			}
			return resolve( {
				message: 'queue found successfully.',
				queue
			} )
		}, waiter )
	} )
}

module.exports = { init }
