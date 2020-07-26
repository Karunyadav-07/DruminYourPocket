var name = prompt("What is your name");
var firstChar = name.slice(0,1);
firstchar = firstChar.toUpperCase();
var restChar = name.slice(1,name.length);
restChar  = restChar.toLowerCase();
alert("Hello " + firstChar + restChar);

document.querySelector(".button").addEventListener("click" , function (){
  var audio = new Audio('sounds/beep-07.wav');
  audio.play();
} );
