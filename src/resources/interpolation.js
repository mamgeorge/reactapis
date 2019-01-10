// linear interpolation and regression
const constants = require( './tests/constants' );

module.exports.calcRegression = function( lister , showCalcs ) {
	//
	if (lister === undefined || lister === null || lister.length === 0) {
		lister = { 'points': [[13, 1], [9, 2], [7, 3], [14, 4], [7, 5], [9, 6], [2, 7]] };
	};
	let txtLine = constants.CONSTS.WHTB;
	let Nval = lister.points.length;
	let avgxs = 0 , avgys = 0
	let sumxs = 0 , sumx2s = 0 , sumys = 0 , sumy2s = 0 , sumxys = 0;
	for( var i = 0 ; i < Nval ; i++ ) {
		//
		sumxs += lister.points[i][0];
		sumys += lister.points[i][1];
		//
		sumx2s += Math.pow( lister.points[i][0] , 2.0 ) ;
		sumy2s += Math.pow( lister.points[i][1] , 2.0 ) ;
		sumxys += lister.points[i][0] * lister.points[i][1] ;
		txtLine += '( ' + lister.points[i][0] + ' , ' + lister.points[i][1] + ' ) \n';
	}
	avgxs = sumxs/Nval ; avgys = sumys/Nval ; 
	let XVAL = Nval * sumx2s - Math.pow( sumxs , 2.0 ) ;
	let YVAL = Nval * sumy2s - Math.pow( sumys , 2.0 ) ;
	let XYVL = Nval * sumxys - ( sumxs * sumys ) ;
	let SDVX =  Math.pow ( XVAL / ( Nval * ( Nval - 1.0 ) ) , 0.5 );
	let SDVY =  Math.pow ( YVAL / ( Nval * ( Nval - 1.0 ) ) , 0.5 );
	let SXYVL = Math.pow ( ( XVAL * YVAL ) , 0.5 );
	let slope = XYVL / XVAL ;
	let intercept = ( sumys - ( slope * sumxs ) ) / Nval ;
	let corr = XYVL / SXYVL ;
	//
	txtLine += constants.CONSTS.BLNK;
	txtLine += constants.CONSTS.REDF + '-------------------\n';
	txtLine += 'Σx: ' + sumxs + '\t\t Σy : ' + sumys + '\n' ;
	txtLine += 'Σx²: '+ sumx2s+ '\t\t Σy²: ' + sumy2s+ '\n' ;
	txtLine += 'αx: ' + avgxs + '\t\t αy : ' + avgys + '\n' ;
	txtLine += 'n : ' + Nval  + '\t\t Σxy: ' + sumxys + '\n' + constants.CONSTS.BLNK ;
	txtLine += constants.CONSTS.BLUF + '-------------------\n' ;
	txtLine += 'XVAL: N*Σx² - (Σx)² \t\t' + XVAL + '\n' ;
	txtLine += 'YVAL: N*Σy² - (Σy)² \t\t' + YVAL + '\n' ;
	txtLine += 'XYVL: NΣxy - (Σx*Σy) \t\t' + XYVL + '\n' ;
	txtLine += 'σX = √[ XVAL / N(N-1) ] \t' + SDVX + '\n' ;
	txtLine += 'σy = √[ YVAL / N(N-1) ] \t' + SDVY + '\n' ;
	txtLine += 'SXYVL: √[ XVAL * YVAL ] \t' + SXYVL + '\n' + constants.CONSTS.BLNK ;
	txtLine += constants.CONSTS.GRNF + '-------------------\n' ;
	txtLine += 'm: XYVL / XVAL: \t\t' + slope + '\t = r*(σy/σX) = ' + ( corr * ( SDVY/SDVX ) ) + '\n' ;
	txtLine += 'b: [ Σy - (m*Σx) ]/N: \t\t' + intercept + '\n' + constants.CONSTS.BLNK ;
	txtLine += constants.CONSTS.YELF + '-------------------\n' ;	
	txtLine += 'r: XYVL / √[XVAL*YVAL ]:\t' + corr + '\n' ;
	txtLine += 'y = m: ( ' + slope + ' ) x + b: ( ' + intercept + ' )' + constants.CONSTS.BLNK + '\n\n';
	//
	let stats = { 
		"sums" : { "sumxs": sumxs, "sumys": sumys , "sumx2s": sumx2s , "sumy2s": sumy2s , "avgxs": avgxs , "avgys": avgys , "Nval": Nval , "sumxys": sumxys } ,
		"func" : { "XVAL": XVAL, "YVAL": YVAL , "XYVL": XYVL , "SDVX": SDVX , "SDVY": SDVY , "SXYVL": SXYVL } , 		
		"line" : { "slope": slope, "intercept": intercept , "corr": corr  } , 
		lister
	};
	//
	let shwLine = constants.CONSTS.PRPL + 'corr: '  + stats.line.corr + constants.CONSTS.BLNK + '\n' ;
	txtLine += constants.CONSTS.CYAN + 'stats: ' + JSON.stringify( stats ) + constants.CONSTS.BLNK + '\n\n' ;
	txtLine += shwLine ;
	//
	switch( showCalcs ) {
		case 1:
			console.log( shwLine ) ;
			break;
		case 2:
			console.log( txtLine ) ;
			break;
		default:
	}
	//
	return stats;
}
