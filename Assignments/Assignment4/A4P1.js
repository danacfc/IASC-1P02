var fullDate = new Date();
var month = fullDate.getMonth() + 1;
var day = fullDate.getDate();
var year = fullDate.getFullYear();
var date = month + "/" + day + "/" + year;
function insertDate(){
  document.getElementById("date").innerHTML = date;
  }
function openNav(){
  document.getElementById("navigation").style.width = "200px";
  document.getElementById("wrapper").style.marginLeft = "200px";
}
function closeNav(){
  document.getElementById("navigation").style.width = "0px";
  document.getElementById("wrapper").style.marginLeft = "0px";
}
