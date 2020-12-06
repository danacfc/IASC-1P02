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
//“How TO - Side Navigation.” How To Create a Side Navigation Menu, www.w3schools.com/howto/howto_js_sidenav.asp.
function postComment(){
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  var post = document.createTextNode(name + ": " + comment);
  var postArea = document.createElement("div");
  postArea.appendChild(post);
  document.getElementById("commentArea").appendChild(postArea);
}
function callDrawing(){
var heart = document.getElementById("heart");
var length = heart.getTotalLength();
heart.style.strokeDasharray = length;
heart.style.strokeDashoffset = length;
window.addEventListener("scroll", drawHeart);
function drawHeart(){
  var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var draw = length * scrollPercent
  heart.style.strokeDashoffset = length - draw;
}
}
// “How TO - Scroll Drawing.” How To Draw on Scroll, www.w3schools.com/howto/howto_js_scrolldrawing.asp. 
