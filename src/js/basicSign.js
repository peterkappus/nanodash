
//A simple sign with a few words.

function basic_sign(data) {

  //empty data object is causing issues on my old-ass iPad...
  //let's try this
  if(defined(data['text'])){
    if(defined(data['background'])) {
      $("#basic_sign").css('background', data['background']);
    }

    $("#basic_sign #content").html(data['text']);

    $("#basic_sign").fadeIn();
  }
}
