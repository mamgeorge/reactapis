
const BLNK = '\033[0m';
const BLUE = '\033[34m';
const PRPL = '\033[95m';
const GRNB = '\033[42m';
const GRNF = '\033[92m';
const REDB = '\033[41m';
const REDF = '\033[91m';
const YELF = '\033[93m';
const CYAN = '\033[96m';
const GRYF = '\033[90m';
const DLMT = '          ' ;

function testor( expects , results ) {
	let evaluation = '' ;
	if ( expects === results )
	{ evaluation = GRNB + DLMT + BLNK + ' ' + GRNF + 'PASS!' + BLNK + ' ' + GRNB + DLMT + BLNK + '\n' ; } else
	{ evaluation = REDB + DLMT + BLNK + ' ' + REDF + 'FAIL!' + BLNK + ' ' + REDB + DLMT + BLNK
		 + ' expects: ' + expects + ' , results: ' + results + '\n' ; }
	return evaluation;
}	


// test calcs
const { calcs } = require( './../src/resources/xtra' );
const expects = -0.6318176543806739;

let lister = { 'points': [ [ -3 , -2 ] , [ 5 , 4 ] ] }; // 0,0
lister = null;

let stats = calcs( lister );
let results = stats.line.corr;

console.log( '\t' + CYAN + 'stats: ' + BLNK + GRYF + JSON.stringify( stats ) + BLNK + '\n' );
console.log( '\t' + PRPL + 'corr: ' + BLNK + YELF + results + BLNK + '\n' );

console.log( testor( expects , null ) );
console.log( testor( expects , results ) );

// colors
// var qc = '' ; for( i =30 ; i < 107 ; i++ ) { qc += '\033[' + i + 'm[' + i + ']\033[0m' ; } ; console.log( qc );
