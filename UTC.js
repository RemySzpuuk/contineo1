// JavaScript source code

function display_c() {
	var refresh=1000; // Refresh rate in milli seconds
	mytime=setTimeout('display_UTC()',refresh)
}

function getFormattedDate(today) 
{
    var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var day  = week[today.getDay()];
    var dd   = today.getDate();
    var mm   = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();

    if(dd<10)  { dd='0'+dd } 
    if(mm<10)  { mm='0'+mm } 
    if(minute<10){ minute='0'+minute } 

    return day+' - '+dd+'/'+mm+'/'+yyyy+' '+hour+':'+minute;
}



function display_UTC() {
	var userDate = new Date()
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var dateUTC=userDate.toUTCString();// changing the display to UTC string
	var newString = dateUTC.replace('GMT' , '');
	
	document.getElementById('UTC').innerHTML = newString;
	display_c();
}