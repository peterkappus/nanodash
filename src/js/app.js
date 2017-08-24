
var dashPanels = [];
var img_urls = "";
WORDS_FOR_PS = "";

MAX_CACHE_AGE_HOURS = 2;

function addPanel(callback, interval, start_hour, end_hour, data){
  dashPanels.push({callback: callback, interval: interval, start_hour: start_hour, end_hour: end_hour, data: data});
}

function getGoogleData() {
  tt = Tabletop.init( { key: GOOGLE_SHEET_KEY,
                   callback: parseSheet,
                   simpleSheet: false, debug: true} )
}

function parseSheet(data,table_top) {
  img_urls = data["art_string"].elements[0].art_string;
  WORDS_FOR_PS = data["words_for_ps"].all().map(function(x){return x['words']});
  //console.log(WORDS_FOR_PS);
  step();
}

//check for local storage
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

//swap panels
//TODO make this smarter so it a) rotates through > 2 panels and b) allows you to set how much time to spend on each.
var i = 0;
function step(){
    $('.dashpanel').hide(); //hide em all
    if(DEBUG_HOUR != "") {
      hour = DEBUG_HOUR;
    }else{
      hour = new Date().getHours();
    }
    //show this panel if it's within the hours specified.
    if(hour >= dashPanels[i]['start_hour'] && hour < dashPanels[i]['end_hour']) {
      dashPanels[i]['callback'](dashPanels[i]['data']);
      setTimeout(step, dashPanels[i]['interval']*1000);
    }else{
      //go immediately to the next one...
      setTimeout(step, 0);
    }
    i = (i + 1) % dashPanels.length;
}


// A simple JSON request cache using the HTML5 "SessionStorage" object to store the JSON response as the value with the URL as the key
//Must pass a callback because the request happens asynchronously
function cachedGetter(url,callback) {
  prefix = "nanodash.url.";

  //only do this for modern browsers.
  if(supports_html5_storage()) {
    //grab the string from the cache and convert it back to an object
    obj = JSON.parse(sessionStorage.getItem(prefix + url));

    //Do we have a current copy?
    if( obj !== null && Date.now() - obj.timestamp < (MAX_CACHE_AGE_HOURS * 1000 * 60 * 60) ){
      //call our callback.
      callback(obj.data);
    }else{
      //make the request...fo realz
      $.getJSON(url,function(data) {
        //create an object with a timestamp and the content of the request
        obj = {};
        obj.data = data;
        obj.timestamp = Date.now();

        //turn the object into a string for storage
        sessionStorage.setItem(prefix + url,JSON.stringify(obj));

        //call our callback function with the data
        callback(obj.data);
      });
    }
  }else{ //no local storage; just make the request and call the callback
    $.getJSON(url,function(data) {
      callback(data);
    });
  }
}

$(function() {
  getGoogleData();
  //call our first step(); after our GoogleData loads.
  //step();

});
