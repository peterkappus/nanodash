// Daily inspiration, etc.
// Dependency: Jquery textfill plugin to size text to fit screen.


//var word_index = 0;

function showStrings(){
  //random string from our sheet
  text = STRINGS[Math.floor(Math.random() * STRINGS.length)];

  $('#picked').html(text);
  $('#wisdom').fadeIn();

  //resize the box to fill the screen
  $('.blockToFill').height(window.innerHeight*0.9).width(window.innerWidth*0.9);

  //resize the text to fill the box
  $('.blockToFill').textfill({minFontPixels:20, maxFontPixels:1500});

}
