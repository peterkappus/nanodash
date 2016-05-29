// Daily inspiration, etc.
// Dependency: Jquery textfill plugin to size text to fit screen.



function words_for_ps(){
  //TODO get this from a public google doc.

  //Bruce Mau's incomplete manifesto for growth
  //NOTE: ECMA6 allows you to use backticks (``) for multi-line strings. Alas, my old-ass iPad doesn't support ECMA6... so I've done the classic hack of replacing newlines with **. Should be irrelevant when we're loading lines from a Google Doc (someday)
  var words = "CAT**RAT**BAT**MAT**FISH**HAND**FAT**Morning"

  //split on newlines to create an array
  //lines = lines.split("\n");
  words = words.split("**");


  //pick based on the current day
  //find the current day of the year (we needed a bigger number than the size of our list)
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  //var oneDay = 1000 * 60 * 60 * 24;
  var oneHour = 1000 * 60 * 60 * 1;
  //var dayOfYear = Math.floor(diff / oneDay);

  //rotate daily
  //picked = lines[dayOfYear % lines.length];

  //or rotate hourly
  var hourOfYear = Math.floor(diff / oneHour);
  text = words[hourOfYear % words.length];

    $('#picked').html(text);
    $('#wisdom').fadeIn();

    //resize the box to fill the screen
    $('.blockToFill').height(window.innerHeight*0.9).width(window.innerWidth*0.9);

    //resize the text to fill the box
    $('.blockToFill').textfill({minFontPixels:20, maxFontPixels:1500});

}
