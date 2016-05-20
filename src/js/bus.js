$(function() {
  //TODO add these: https://github.com/erikflowers/weather-icons; http://cdnjs.com/libraries/weather-icons


  //bus times stuff
  //using Aiden Feldman's awesome JSONProxy: https://jsonp.afeld.me/
  //TFL has an API for bus-times but it requires IP whitelisting (and authentication) which won't do for a client-only solution like this
  //bus_url = "https://jsonp.afeld.me/?url=http%3A%2F%2Fm.countdown.tfl.gov.uk%2Farrivals%2F76840&callback=?";
  //bus_url = "http://m.countdown.tfl.gov.uk/arrivals/76840?callback=?"

  //NOTE: BUS_URL & BUS_REGEX must be set in "config.js"

  var departureTime = null;

  function getDepartureTime(){
    $.getJSON(BUS_URL,function(data){
      //get the first one
      minutes = BUS_REGEX.exec(data.data)[1];
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
    $("#next_bus").html(min + " min to next bus");
  }

  //TODO: Rethink this now that each panel gets a callback everytime it shows...

  //retreive every 5 min
  //setInterval(getDepartureTime,1000*60*5);

  //update every min
  //setInterval(updateMinToDeparture,1000*60);

  //first time...
  //getDepartureTime();

});
