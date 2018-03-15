var GweatherObject = new XMLHttpRequest();
GweatherObject.open('GET', 'https://api.wunderground.com/api/9d9d50d9dae82d0f/conditions/q/TX/Greenville.json', true);

GweatherObject.send();

GweatherObject.onload = function () {

    var weatherInfo = JSON.parse(GweatherObject.responseText);

    console.log(weatherInfo);
    document.getElementById('Gplace').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('GcurrentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('GweathObs').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('Gweather_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('GwindMPH').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('Gforecast').innerHTML = weatherInfo.current_observation.feelslike_string;
}

var GtxtForecast = new XMLHttpRequest();
GtxtForecast.open('GET','https://api.wunderground.com/api/9d9d50d9dae82d0f/forecast10day/q/TX/Greenville.json', true);

GtxtForecast.send();

GtxtForecast.onload = function() {
    var weatherText = JSON.parse(GtxtForecast.responseText);
    console.log(weatherText);

    document.getElementById('Ghi').innerHTML = weatherText.forecast.txt_forecast.forecastday["0"].fcttext;

}