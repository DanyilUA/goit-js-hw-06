const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



let liElements = ingredients.map(ingredient => {
  
  let liOneEl = document.createElement('li');

  liOneEl.textContent = ingredient;
  liOneEl.classList.add('item');

  return liOneEl;
});


let ulEl = document.querySelector('#ingredients');

ulEl.append(...liElements);

console.log(ulEl);