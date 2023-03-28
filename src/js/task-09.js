function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector("button");
const body = document.querySelector("body");
const span = document.querySelector("span");
function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
}
button.addEventListener("click", changeColor);