function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;п
}
let spanEl = document.querySelector('.color');
let bodyEl = document.body;
let buttonEl = document.querySelector('.change-color');
buttonEl.addEventListener('click', changingColor);

function changingColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl = bodyEl;
  console.log('color', spanEl);

};

