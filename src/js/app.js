//app-wide functions go here

$("h1").fitText(0.24);
$("h2").fitText(0.86);

MAX_CACHE_AGE = 1000 * 60 * 60; //1 hour (1000ms * 60sec/min * 60min/hours)

//check for local storage
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}


//pass a URL to get the JSON at that URL and cache it then return it.
//if the URL is already in the cache, return the cached copy
function cachedGetter(url) {
  prefix = "nanodash.url.";

  //create an object with a timestamp and the content of the request

  if(supports_html5_storage()) {

    //grab the string from the cache and convert it back to an object
    obj = JSON.parse(sessionStorage.getItem(prefix + url));

    //Do we have a current copy?
    if( obj && Date.now() - obj.timestamp < MAX_CACHE_AGE ){
      //parse the string back into an object, then return the data piece
      return(obj.data);
    }else{
      //make the request...fo realz
      $.getJSON(url,function(data) {
        obj = {};
        obj.data = data;
        obj.timestamp = Date.now();

        //turn the object into a string for storage
        sessionStorage.setItem(prefix + url,JSON.stringify(obj));

        //return it for use
        return(data);
      });
    }
  }
}
