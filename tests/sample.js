
const xtra = require( './../src/resources/xtra.js' );

// test calcs
const expects = -0.6318176543806739;
let lister = { 'points': [ [ -3 , -2 ] , [ 5 , 4 ] ] }; lister = null;
//
let stats = xtra.calcRegression( lister );
let results = stats.line.corr;
//
// console.log( xtra.showColors( ) );
console.log( xtra.testResults( results , expects ) );
