//requires STRFTIME library
$(function() {

  function updateTime(){
    $("#clock").html(strftime("%H:%M"));
    if(strftime("%H"))
  }


  //update every min
  setInterval(updateTime,1000*60);

  //first time...
  updateTime();
});
