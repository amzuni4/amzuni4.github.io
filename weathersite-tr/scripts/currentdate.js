var theDays= ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var theMonths= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];

var d = new Date();
var dayName = theDays[d.getDay()];
var day = d.getDate();
var monthName = theMonths[d.getMonth()]

var year = d.getFullYear();
 document.getElementById("getDate").innerHTML = dayName + ", " + day + " " + monthName + " " + year;