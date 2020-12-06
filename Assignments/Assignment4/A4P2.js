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
function displayAnswer(){
  if(document.getElementById("option1").checked){
    document.getElementById("block1").style.border = "3px solid red";
    document.getElementById("result1").style.color = "red";
    document.getElementById("result1").innerHTML= "Incorrect!";
    showCorrectAnswer();
  }
  if(document.getElementById("option2").checked){
    document.getElementById("block2").style.border = "3px solid red";
    document.getElementById("result2").style.color = "red";
    document.getElementById("result2").innerHTML= "Incorrect!";
    showCorrectAnswer();
  }
  if(document.getElementById("option3").checked){
    document.getElementById("block3").style.border = "3px solid limegreen";
    document.getElementById("result3").style.color = "limegreen";
    document.getElementById("result3").innerHTML= "Correct!";
  }
  if(document.getElementById("option4").checked){
    document.getElementById("block4").style.border = "3px solid red";
    document.getElementById("result4").style.color = "red";
    document.getElementById("result4").innerHTML= "Incorrect!";
    showCorrectAnswer();
  }
  document.getElementById("submitButton").disabled = true;
}
function showCorrectAnswer(){
  let showAnswer = document.createElement("button");
  showAnswer.innerHTML = "Show Correct Answer";
  showAnswer.style.position = "relative";
  showAnswer.style.left = "120px";
  document.getElementById("showAnswer").appendChild(showAnswer);
  showAnswer.addEventListener("click", () => {
    document.getElementById("block3").style.border = "3px solid limegreen";
    document.getElementById("result3").style.color = "limegreen";
    document.getElementById("result3").innerHTML = "Correct!";
    document.getElementById("showAnswer").removeChild(showAnswer);
  })
}
// Arobelidze, Alexander. “How To Embed Multiple Choice Quiz Questions into Your Article.” FreeCodeCamp.org, FreeCodeCamp.org, 6 Apr. 2020, www.freecodecamp.org/news/multiple-choice-quiz-template/. 
function unhideArt(){
  document.getElementById("art").style.display = "block";
}
