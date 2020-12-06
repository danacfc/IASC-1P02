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
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
  showSlides(slideIndex += n);
}
function currentSlide(n){
  showSlides(slideIndex = n);
}
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length){slideIndex = 1}
  if (n < 1){slideIndex = slides.length}
  for(i = 0;i < slides.length;i++){slides[i].style.display = "none";}
  for(i = 0;i < dots.length;i++){dots[i].className = dots[i].className.replace(" active","");}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//“How TO - Slideshow.” How To Create a Slideshow, www.w3schools.com/howto/howto_js_slideshow.asp. 
