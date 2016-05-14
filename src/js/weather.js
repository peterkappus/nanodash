
//use the forecast.io API to get the weather
//You'll need to specify an API key in the config.js
//Be careful where you deploy this since it'll be visible in the code
//you could implement some sort of server-side proxy if you wanted to hide your key...
//TODO add these: https://github.com/erikflowers/weather-icons; http://cdnjs.com/libraries/weather-icons

url = "https://api.forecast.io/forecast/" + FORECAST_IO_API_KEY + "/" + FORECAST_LAT_LONG + "?&callback=?"

//$("h1#temps").fitText(0.24);

function showTemp(elementId, value) {
  html = Math.round(value) + '&deg;';
  $(elementId).html(html);
}

function f_to_c(tempFahrenheit) {
  return (tempFahrenheit-32)/1.8;
}

function displayWeather(data){
  current = data.currently.temperature;
  high = data.daily.data[0].temperatureMax;
  low = data.daily.data[0].temperatureMin;

  //any rain in the next X hours
  // grab each chance of rain in the next X hrs
  rain = data.hourly.data.slice(0,10).map( function(h) {
    return(h.precipProbability);
  }).filter( function(value){
    //over the threshold?
    return value > 0.3;
  }).length > 2; //do we have more than X hours of possible rain?

  //if it's gonna rain, turn the bg blue
  if (rain) {
    $('body').css("background", "#00f");
    $('body').css("color", "#fff");
  }

  showTemp("#temp",current);
  showTemp("#high",high);
  $("#high_c").html(Math.round(f_to_c(high)) + "&deg;C");
  showTemp("#low",low);
}

function weather_setup(){
  $("h1#temps").fitText(0.24); //set font-sizes
  $("h2#next_bus").fitText(0.89);
  cachedGetter(url,displayWeather);
}
