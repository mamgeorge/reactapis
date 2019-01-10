// testing without framework

const { showCube } = require( '../../src/resources/tests/samples' );
const { assertNew , testRunner } = require( '../../src/resources/tests/constants' );

let results , expects;

	testRunner( 'return 7ⁿ , n=3 !' , function( ) { 
	results = showCube( 7 );
	expects = 343;
	assertNew( results , expects );
} )
