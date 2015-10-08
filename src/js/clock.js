//requires STRFTIME library
// Shows a clock in the upper right.
// TODO: change bg color as time approaches time to leave.

$(function() {

  function updateTime(){
    d = new Date();
    min = d.getMinutes();

    //zero padding
    if(min < 10) {
      min = "0" + min;
    }

    $("#clock").html(d.getHours() + ":" + min);

    //is it time to go?
    if(d.getHours() == 8 && d.getMinutes() > 35) {
      $("#clock").addClass("red");
    }
  }

  //update every min
  setInterval(updateTime,1000*60);

  //first time...
  updateTime();
});
