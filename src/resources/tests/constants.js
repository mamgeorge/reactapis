//
module.exports.CONSTS = {
	REDB : '\033[41m' ,
	REDF : '\033[91m' ,
	YELF : '\033[93m' ,
	CYAN : '\033[96m' ,
	GRNB : '\033[42m' ,
	GRNF : '\033[92m' ,
	BLUF : '\033[34m' ,
	PRPL : '\033[95m' ,
	GRYF : '\033[90m' ,
	GRYB : '\033[100m' ,
	WHTB : '\033[107m' ,
	BLNK : '\033[0m' ,
	DLMT : '██████████'
}

module.exports.showColors = function( ) {
	//
	var txtLine = '' ; 
	for( var ictr = 29 ; ictr <= 107 ; ictr++ ) { 
		if( ictr >= 48 && ictr < 89 ) { continue; }
		if( ictr == 89 ) { txtLine += '\n'; }
		txtLine += '\033[' + ictr + 'm[' + ictr + ']' + BLNK ; 
	} ; 
	return txtLine ;
}

module.exports.testResults = function( results , expects ) {
	//
	let txtLine = '' ;
	if ( results === expects )
	{ txtLine = this.CONSTS.GRNF + this.CONSTS.DLMT + ' PASSED! ' + this.CONSTS.DLMT + this.CONSTS.BLNK 
		+ ' results: ' + results + '\n' ; } else
	{ txtLine = this.CONSTS.REDF + this.CONSTS.DLMT + ' FAILED! ' + this.CONSTS.DLMT + this.CONSTS.BLNK
		+ ' results: ' + results + ' , expects: ' + expects + '\n' ; }
	return txtLine;
}


// a simple assertion library
module.exports.assertNew = function( actual , expected ) {
	const equal = function( actual , expected ) {
		if ( actual != expected ) {
			throw new Error( `Expeced actual ${ actual } to equal ${ expected }!` );
		}
	}
	equal( actual , expected );
}

// a simple test runner
module.exports.testRunner = function ( testTitle , callBack ) {
	console.log( 'testing showCube!\n' );
	try {
		callBack( ) ;
		console.log( `Passed: ${ testTitle }` );
	}
	catch( error ) {
		console.log( `Failed: ${ testTitle }` );
		// throw error ;
	}
	console.log( `\n\n` );
}

// module.exports = { assertNew , testRunner }
