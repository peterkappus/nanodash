
//requires STRFTIME library
// Shows a clock in the upper right.
// TODO: change bg color as time approaches time to leave.

//size our text in the main clock panel
//$("#clock-panel h1").fitText(0.01);
//$('#clock-panel').height(window.innerHeight*0.9).width(window.innerWidth*0.9);
//resize the text to fill the box
//$('#clock-panel h1').textfill({minFontPixels:20, maxFontPixels:1500});


function clock(){
  d = new Date();
  min = d.getMinutes();

  //zero padding
  if(min < 10) {
    min = "0" + min;
  }

  $("#basic_sign #content").html(d.getHours() + ":" + min);

  //is it time to go?
  if(d.getHours() == 8 && d.getMinutes() > 30) {
    $("#basic_sign #content").addClass("red");
  }

  //random color... just kuz.
  color = "#"
  for(var i = 0; i<6; i++){
    color += (Math.random()*0x9<<0).toString(16)
  }

  $("#basic_sign").css('background',color)

  $("#basic_sign").fadeIn();

}
