//requires STRFTIME library
// Shows a clock in the upper right.
// TODO: change bg color as time approaches time to leave.

$(function() {

  function updateTime(){
    $("#clock").html(strftime("%H:%M"));
  }


  //update every min
  setInterval(updateTime,1000*60);

  //first time...
  updateTime();
});
