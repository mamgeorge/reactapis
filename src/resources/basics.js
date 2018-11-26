export function dateTimeFormat( dateOld , varFormat ) {
	//
	var dateTimeFormatted = '' ;
	var dateNew = new Date( ) ;
	if ( dateOld !== null && dateOld !== '' ) { dateNew = dateOld ; }

	var dateYear	= dateNew.getFullYear( ) ;
	var dateMonth	= dateNew.getMonth( )+1 ;
	var dateDay		= dateNew.getDate( ) ;
	var timeHour	= dateNew.getHours( ) ; if ( timeHour>12 ) { timeHour = timeHour - 12 ; }
	var timeMinutes	= dateNew.getMinutes( ) ;
	var timeSeconds	= dateNew.getSeconds( ) ;
	var timeMilliseconds = dateNew.getMilliseconds( ) ;
	//
	if ( dateMonth.length	<2 )	{ dateMonth		= '0' + dateMonth ;	 }
	if ( dateDay.length		<2 )	{ dateDay		= '0' + dateDay ;	 }
	if ( timeHour.length	<2 )	{ timeHour		= '0' + timeHour ;	 }
	if ( timeMinutes.length	<2 )	{ timeMinutes	= '0' + timeMinutes ; }
	if ( timeSeconds.length	<2 )	{ timeSeconds	= '0' + timeSeconds ; }
	//
	// alert ( 'dateOld: ' + dateOld + ' , varFormat' + varFormat ) ;
	if ( varFormat === '' || varFormat === ' ' || varFormat === 0 || varFormat === null ) 
	{ varFormat = 0 ; }
	//
	if ( varFormat===0 || varFormat === 'mm/dd/yyyy' ) {
		var dateTotal = dateMonth + '/' + dateDay + '/' + dateYear ;
		dateTimeFormatted = dateTotal ;
	}
	else if ( varFormat===1 || varFormat === 'yyyy/mm/dd - HH:MM:SS.mmmm' )
	{
		dateTotal = dateYear + '/' + dateMonth + '/' + dateDay ;
		var timeTotal = timeHour + ':' + timeMinutes + ':' + timeSeconds + '.' + timeMilliseconds ;
		dateTimeFormatted = '' + dateTotal + ' - ' + timeTotal ;
	}
	else if ( varFormat===2 || varFormat === 'yyyy-mm-dd' )
	{
		dateTimeFormatted = dateYear + '-' + dateMonth + '-' + dateDay ;
	}
	else // varFormat=0 or varFormat='mm/dd/yyyy'
	{
		dateTotal = dateMonth + '/' + dateDay + '/' + dateYear ;
		dateTimeFormatted = dateTotal ;
	 }
	return dateTimeFormatted ;
 }
// module.exports = { dateTimeFormat };
//
export function docReflection( ) {
	//
	var txtLine = '' ;
	var delim1 = '<tr><th><b>' ;
	var delim2 = '</b></th><td>' ;
	var delim3 = '&nbsp ;</td></tr>' ;

	txtLine +=  '<table>' ;
	txtLine +=  delim1 + "title"		+ delim2 + document.title				+ delim3 ;
	txtLine +=  delim1 + "clientWidth"	+ delim2 + document.body.clientWidth	+ delim3 ;
	txtLine +=  delim1 + "clientHeight"	+ delim2 + document.body.clientHeight	+ delim3 ;

	delim1 = '<tr><th><b>' ;
	delim2 = '</b></th><td>' ;
	txtLine +=  delim1 + "pageXOffset"	+ delim2 + window.pageXOffset			+ delim3 ;
	txtLine +=  delim1 + "pageYOffset"	+ delim2 + window.pageYOffset			+ delim3 ;
	txtLine +=  delim1 + "availWidth."	+ delim2 + window.screen.availWidth		+ delim3 ;
	txtLine +=  delim1 + "availHeight"	+ delim2 + window.screen.availHeight	+ delim3 ;
	txtLine +=  delim1 + "location"		+ delim2 + window.location				+ delim3 ;
	txtLine +=  delim1 + "hash"			+ delim2 + window.location.hash			+ delim3 ;
	txtLine +=  delim1 + "host"			+ delim2 + window.location.host			+ delim3 ;
	txtLine +=  delim1 + "hostname"		+ delim2 + window.location.hostname		+ delim3 ;
	txtLine +=  delim1 + "href"			+ delim2 + window.location.href			+ delim3 ;
	txtLine +=  delim1 + "pathname"		+ delim2 + window.location.pathname		+ delim3 ;
	txtLine +=  delim1 + "port"			+ delim2 + window.location.port			+ delim3 ;
	txtLine +=  delim1 + "protocol"		+ delim2 + window.location.protocol		+ delim3 ;
	txtLine +=  delim1 + "search.."		+ delim2 + window.location.search		+ delim3 ;

	delim1 = '<tr><th><b>' ;
	delim2 = '</b></th><td>' ;
	txtLine +=  delim1 + "appCodeName"	+ delim2 + navigator.appCodeName		+ delim3 ;
	txtLine +=  delim1 + "appName"		+ delim2 + navigator.appName			+ delim3 ;
	txtLine +=  delim1 + "appVersion"	+ delim2 + navigator.appVersion			+ delim3 ;
	txtLine +=  delim1 + "language"		+ delim2 + navigator.language			+ delim3 ;
	txtLine +=  delim1 + "mimeTypes"	+ delim2 + navigator.mimeTypes.length	+ delim3 ;
	txtLine +=  delim1 + "platform"		+ delim2 + navigator.platform			+ delim3 ;
	txtLine +=  delim1 + "plugins"		+ delim2 + navigator.plugins.length		+ delim3 ;
	txtLine +=  delim1 + "userAgent"	+ delim2 + navigator.userAgent			+ delim3 ;
	txtLine +=  '</table>' ;
	return txtLine ;
 }
 // module.exports = { docReflection };