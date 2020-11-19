function add(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  var addOutput = one + two;
  document.getElementById("output").innerHTML = addOutput;
}

function subtract(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  var subtractOutput = one - two;
  document.getElementById("output").innerHTML = subtractOutput;
}

function multiply(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  var multiplyOutput = one * two;
  document.getElementById("output").innerHTML = multiplyOutput;
}

function divide(){
  var one = Number(document.getElementById("Number1").value);
  var two = Number(document.getElementById("Number2").value);
  var divideOutput = one / two;
  document.getElementById("output").innerHTML = divideOutput;
}
