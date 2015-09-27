$(function() {
    //use the forecast.io API to get the weather
    //You'll need to specify an API key in the config.js
    //Be careful where you deploy this since it'll be visible in the code
    //you could implement some sort of server-side proxy if you wanted to hide your key...
    //TODO add these: https://github.com/erikflowers/weather-icons; http://cdnjs.com/libraries/weather-icons

    url = "https://api.forecast.io/forecast/" + FORECAST_IO_API_KEY + "/51.5072,0.1275?&callback=?"

    function showTemp(elementId, value) {
      html = Math.round(value) + '&deg;F';
      $(elementId).html(html);
    }

    $.getJSON(url,function(data) {

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
      showTemp("#low",low);

    });
  });
