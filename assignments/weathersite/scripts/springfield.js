var SweatherObject = new XMLHttpRequest();
SweatherObject.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/conditions/q/OR/Springfield.json', true);

SweatherObject.send();

SweatherObject.onload = function () {

    var weatherInfo = JSON.parse(SweatherObject.responseText);

    console.log(weatherInfo);
    document.getElementById('Splace').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('ScurrentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('SweathObs').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('Sweather_icon').src = weatherInfo.current_observation.icon_url;
 document.getElementById('SwindChill').innerHTML = weatherInfo.current_observation.windchill_f;

    document.getElementById('SwindMPH').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('Sforecast').innerHTML = weatherInfo.current_observation.feelslike_string;



}

var StxtForecast = new XMLHttpRequest();
StxtForecast.open('GET','https://api.wunderground.com/api/9d9d50d9dae82d0f/forecast10day/q/OR/Springfield.json', true);

StxtForecast.send();

StxtForecast.onload = function() {
    var weatherText = JSON.parse(StxtForecast.responseText);
    console.log(weatherText);

    document.getElementById('Shi').innerHTML = weatherText.forecast.txt_forecast.forecastday["0"].fcttext;
    
    var weatherTen = JSON.parse(StxtForecast.responseText).forecast.simpleforecast.forecastday;    
    var tbody = document.querySelector('tbody');
    var tr = document.createElement('tr');

    for (var i = 0; i < weatherTen.length; i++) {
        var td = document.createElement('td');
        td.textContent = weatherTen[i].high.fahrenheit + '\u00B0' + 'F';
        tr.appendChild(td);
        tbody.appendChild(tr);

    }
    console.log(weatherTen);
    

}