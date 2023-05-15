let textEL = document.querySelector('#text');
let inputEl = document.querySelector('#font-size-control');

inputEl = document.addEventListener('input', moving);

function moving(event) { 
    let fontSize = event.target.value;
    textEL.style.fontSize = `${fontSize}px`;

}