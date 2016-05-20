
//A simple sign with a few words.

function basic_sign(data) {
  $("#basic_sign").css('background', data['background']);
  $("#basic_sign #content").html(data['text']);

  $("#basic_sign").fadeIn();
}
