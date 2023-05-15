let formaEl = document.querySelector('.login-form');
let valuesEl = {};

formaEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
    } else {
        valuesEl = {
        email: email.value,
        password: password.value,
    };

    console.log(valuesEl);
    formaEl.reset();
    }
}
