// A generic fill text box with customised background color


function long_text(data={text:'', background: '#000'}) {

  $("#long_text").css('background', data['background']);
  $("#long_text #content").html(data['text']);
  $("#long_text").fadeIn();

  //resize the box to fill the screen
  $('.blockToFill').height(window.innerHeight*0.9).width(window.innerWidth*0.9);

  //resize the text to fill the box
  $('.blockToFill').textfill({minFontPixels:20, maxFontPixels:1500});
}
