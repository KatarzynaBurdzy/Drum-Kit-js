
// detecting button press

document.querySelectorAll(".drum").forEach(item => item.addEventListener("click", function() {

  let buttonInnerHtlm = this.innerHTML;  // chcecking inner html of pressed button

  makeSound(buttonInnerHtlm);  // sending above information to makeSound to play sound

  buttonAnimation(buttonInnerHtlm);

}));

//detecting keybord press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
})



function makeSound(key) {

  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    default: console.log(buttonInnerHtlm);

  }

}


function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
