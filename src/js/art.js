

//NOTE: _10.jpg == big!
var urls = IMG_URLs.split(' ');
var img_index = Math.round(Math.random() * (urls.length-1));

var loaded = true;
var placeholder = new Image();

function art(){
  if(loaded) {
    img_url = urls[img_index];
    //alert(img_index);
    $("#art").hide();
    //img_url = urls[Math.round(Math.random()*(urls.length-1))];
    $('#art img').attr('src',img_url);
    loaded = false;
    $('#art img').load(function(img_url){
        $('#art').css('text-align','center');
         $("#art").fadeIn();
         //console.log("loaded " + img_url);
         loaded = true;
       });
    $('#art img').css('height','100%');
    img_index = ((img_index+1) % (urls.length));
    //preload the next one...
    placeholder.src = img_url = urls[img_index];
  }
}
