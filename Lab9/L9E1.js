var start = new Date();
start.getMilliseconds();

function stopTime(){
  var stop = new Date();
  stop.getMilliseconds();
  var difference = (stop - start)/600;
  alert(String("You have been on the page for: " + difference + " seconds"));
}
