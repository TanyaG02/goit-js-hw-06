const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");
button.addEventListener("click", getRandomHexColor);

function getRandomHexColor(evt) {
  body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  span.textContent = body.style.backgroundColor;
}
