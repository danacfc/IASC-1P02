var fullDate = new Date();
var month = fullDate.getMonth() + 1;
var day = fullDate.getDate();
var year = fullDate.getFullYear();
var date = month + "/" + day + "/" + year;
function insertDate(){
  document.getElementById("date").innerHTML = date;
  }
