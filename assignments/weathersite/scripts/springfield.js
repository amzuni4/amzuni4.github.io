var GweatherObject = new XMLHttpRequest();
GweatherObject.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/conditions/q/OR/Springfield.json', true);

GweatherObject.send();

GweatherObject.onload = function () {

    var weatherInfo = JSON.parse(GweatherObject.responseText);

    console.log(weatherInfo);
    document.getElementById('Splace').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('ScurrentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('SweathObs').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('Sweather_icon').src = weatherInfo.current_observation.icon_url;
 document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;

    document.getElementById('SwindMPH').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('Sforecast').innerHTML = weatherInfo.current_observation.feelslike_string;



}

var GtxtForecast = new XMLHttpRequest();
GtxtForecast.open('GET','https://api.wunderground.com/api/9d9d50d9dae82d0f/forecast10day/q/OR/Springfield.json', true);

GtxtForecast.send();

GtxtForecast.onload = function() {
    var weatherText = JSON.parse(GtxtForecast.responseText);
    console.log(weatherText);

    document.getElementById('Shi').innerHTML = weatherText.forecast.txt_forecast.forecastday["0"].fcttext;

}