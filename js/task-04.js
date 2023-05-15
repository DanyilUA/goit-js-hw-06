let counterValue = 0;

let btnDecrement = document.querySelector('button[data-action="decrement"]');
let btnIncrement = document.querySelector('button[data-action="increment"]');

let valueEL = document.querySelector('#value');

btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    valueEL.textContent = counterValue;
    
    console.log(valueEL);

});

btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    valueEL.textContent = counterValue;

    console.log(valueEL);

});

