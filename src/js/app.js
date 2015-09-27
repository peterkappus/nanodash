$(function() {
  //TODO add these: https://github.com/erikflowers/weather-icons; http://cdnjs.com/libraries/weather-icons

  //bus times stuff
    bus_url = "https://jsonp.afeld.me/?url=http%3A%2F%2Fm.countdown.tfl.gov.uk%2Farrivals%2F76840&callback=?";
    departureTime = null;

    function getDepartureTime(){
      $.getJSON(bus_url,function(data){
        regex = /Road&#160;<\/td>\s+<td class="resDue">(\d+)/;
        //get the first one
        minutes = regex.exec(data.data)[1];
        departureTime = Date.now() + (60*1000*minutes); //in seconds
        updateMinToDeparture();
      });
    }

    function updateMinToDeparture(){
      min = Math.floor((departureTime - Date.now())/(1000*60));
      if(min < 1) {
        getDepartureTime();
      }
      //display it
      $("#next_168").html(min + " min to next 168");
    }

    //retreive every 5 min
    setInterval(getDepartureTime,1000*60*5);

    //update every min
    setInterval(updateMinToDeparture,1000*60);

    //first time...
    getDepartureTime();

  //weather stuff...

    url = "https://api.forecast.io/forecast/" + FORECAST_IO_API_KEY + "/51.5072,0.1275?&callback=?"

    function showTemp(elementId, value) {
      html = Math.round(value) + '&deg;F';
      $(elementId).html(html);
    }

    $.getJSON(url,function(data) {

      current = data.currently.temperature;
      high = data.daily.data[0].temperatureMax;
      low = data.daily.data[0].temperatureMin;

      rain = false;
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
    //resize H1 to be reaally biggg
    $("h1").fitText(0.24);
    $("h2").fitText(0.86);
  });
