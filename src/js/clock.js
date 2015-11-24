//requires STRFTIME library
// Shows a clock in the upper right.
// TODO: change bg color as time approaches time to leave.

$(function() {

  //size our text in the main clock panel
  //$("#clock-panel h1").fitText(0.01);
  //$('#clock-panel').height(window.innerHeight*0.9).width(window.innerWidth*0.9);
  //resize the text to fill the box
  //$('#clock-panel h1').textfill({minFontPixels:20, maxFontPixels:1500});


  function updateTime(){
    d = new Date();
    min = d.getMinutes();

    //zero padding
    if(min < 10) {
      min = "0" + min;
    }

    $(".clock").html(d.getHours() + ":" + min);

    //is it time to go?
    if(d.getHours() == 8 && d.getMinutes() > 30) {
      $(".clock").addClass("red");
    }
  }

  //update every 30 sec
  setInterval(updateTime,1000*20);

  //first time...
  updateTime();

  dashPanels.push({name:'#clock',callback: updateTime});
});
