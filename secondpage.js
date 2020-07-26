
var noOfButtons = document.querySelectorAll(".drum").length;

// insted of .drum here button can also be used

for( var i=0 ; i < noOfButtons ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", respondToClick);
}

function respondToClick(){
  var buttonData = this.innerHTML;

  switch (buttonData) {
    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "w":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "e":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "r":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "q":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "a":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    default:

  }

}
