function zipcode(){

var zip = 92503;
    var requestURL = "http://api.wunderground.com/api/9d9d50d9dae82d0f/geolookup/q/" + zip + ".json"
    
var weatherObject = new XMLHttpRequest();
    weatherObject.open('GET', requestURL);
    
    weatherObject.send();
    
    weatherObject.onload = function () {
        
        var weatherZip = JSON.parse(weatherObject.responseText);
        
        console.log(weatherZip);
    }
}