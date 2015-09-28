//app-wide functions go here

$("h1").fitText(0.24);
$("h2").fitText(0.89);

MAX_CACHE_AGE = 1000 * 60 * 60; //1 hour (1000ms * 60sec/min * 60min/hours)

//check for local storage
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}


//pass a URL to get the JSON at that URL and cache it then call our callback
//if the URL is already in the cache, return the cached copy
//can't just return a value because getJSON happens asynchronously
function cachedGetter(url,callback) {
  prefix = "nanodash.url.";

  if(supports_html5_storage()) {
    //grab the string from the cache and convert it back to an object
    obj = JSON.parse(sessionStorage.getItem(prefix + url));

    //Do we have a current copy?
    if( obj !== null && Date.now() - obj.timestamp < MAX_CACHE_AGE ){
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
