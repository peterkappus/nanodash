var loaded = true;
var placeholder = new Image();
var img_index = 0;

function show_art(){
  var urls = img_urls.split(' ');

  //only randomize if we're at zero.
  if(img_index == 0) {
    img_index = Math.round(Math.random() * (urls.length-1));
  }

  if(loaded) {
    img_url = urls[img_index];
    $("#art").hide();
    //img_url = urls[Math.round(Math.random()*(urls.length-1))];
    $('#art img').attr('src',img_url);
    loaded = false;
    $('#art img').load(function(img_url){
        $('#art').css('text-align','center');
         $("#art").fadeIn();
         loaded = true;
       });
    $('#art img').css('height','100%');
    img_index = ((img_index+1) % (urls.length));
    //preload the next one...
    placeholder.src = img_url = urls[img_index];
  }
}
