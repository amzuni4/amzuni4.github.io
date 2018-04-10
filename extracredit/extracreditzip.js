function zipcode(){

var zip = document.getElementById("zipCode");
    var zip=zip.value
    var requestURL = ('GET', "http://api.wunderground.com/api/9d9d50d9dae82d0f/geolookup/q/" + zip + ".json")
    //http://api.wunderground.com/api/9d9d50d9dae82d0f/geolookup/q/92503.json
var weatherButton = new XMLHttpRequest();
    weatherButton.open('GET', requestURL);
    
    weatherButton.send();
    
    weatherButton.onload = function () {
        
        var weatherZip = JSON.parse(weatherButton.responseText);
        
        console.log(weatherZip);
        
        document.getElementById('city').innerHTML = weatherZip.location.city+", ";
        document.getElementById('state').innerHTML = weatherZip.location.state;
        document.getElementById('wrong').innerHTML = weatherZip.response.error;
    }

}

