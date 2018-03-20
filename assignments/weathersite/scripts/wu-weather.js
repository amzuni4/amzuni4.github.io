var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);

    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('weathObs').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;

    document.getElementById('windMPH').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('forecast').innerHTML = weatherInfo.current_observation.feelslike_string;



}

var txtForecast = new XMLHttpRequest();
txtForecast.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/forecast10day/q/MN/Franklin.json', true);

txtForecast.send();

txtForecast.onload = function () {
    var weatherText = JSON.parse(txtForecast.responseText);
    document.getElementById('hi').innerHTML = weatherText.forecast.txt_forecast.forecastday["0"].fcttext;
    
    var weatherTen = JSON.parse(txtForecast.responseText).forecast.simpleforecast.forecastday;    
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
