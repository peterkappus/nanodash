//requires STRFTIME library
// Shows a clock in the upper right.
// TODO: change bg color as time approaches time to leave.

$(function() {

  function updateTime(){
    d = new Date();
    $("#clock").html(d.getHours() + ":" + d.getMinutes());

    if(d.getHours() == 8 && d.getMinutes() > 30) {
      $("#clock").addClass("red");
    }
  }

  //update every min
  setInterval(updateTime,1000*60);

  //first time...
  updateTime();
});
