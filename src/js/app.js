dashPanels = [];

ROTATION_INTERVAL = 15; //seconds between panel rotations
MAX_CACHE_AGE_HOURS = 2;

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
   //alert(i);
    $('.dashpanel').hide(); //hide em all
    $(dashPanels[i]['name']).show();
    dashPanels[i]['callback'](); //weird syntax to call our callback
    i = (i + 1) % dashPanels.length;
}

function stop() {
  clearInterval(rotation);
}

//rotate between panels
rotation = setInterval(step,ROTATION_INTERVAL * 1000);

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
  step();
});
