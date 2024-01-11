const buttonGaming = document.querySelector(".button-game");
const buttonMusic = document.querySelector(".button-music");
const buttonTech = document.querySelector(".button-tech");

function clickButton(button) {
  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    removePrevious();
    button.classList.add("is-toggled");
  }
}

function removePrevious() {
  const previousToggled = document.querySelector(".is-toggled");
  if (previousToggled) {
    previousToggled.classList.remove("is-toggled");
  }
}
