const buttonGaming = document.querySelector(".button-game");
const buttonMusic = document.querySelector(".button-music");
const buttonTech = document.querySelector(".button-tech");

function clickButton(button) {
  if (button.classList.contains("is-toggled")) {
    button.classList.remove("is-toggled");
  } else {
    button.classList.add("is-toggled");
  }
}
