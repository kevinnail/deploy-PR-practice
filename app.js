// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const yourName = document.getElementById('yourName');
let result = document.getElementById('result');
const form1 = document.getElementById('form1');
const displayName = document.getElementById('name-display');

const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn.addEventListener('click', () => {
    if (check(yourName) === true) {
        result.textContent = yourName.value;
        displayName.classList.toggle('hide');
        form1.classList.toggle('hide');
        yourName.value = '';
    } else {
        alert('You must enter a name.');
    }
});

btn2.addEventListener('click', () => {
    displayName.classList.toggle('hide');
    form1.classList.toggle('hide');
});

function check(yourName) {
    if (yourName.value === '') {
        return false;
    } else {
        return true;
    }
}
